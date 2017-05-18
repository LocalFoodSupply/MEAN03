import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ThreadService } from './thread.service';
import { contentHeaders } from '../common/headers';
import { Message } from '../datatypes/message';
import { User } from '../datatypes/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication.service';
type ObservableMessages = Observable<Array<Message>>;

@Injectable()
export class MessageService {
  public messages: ObservableMessages;

  private _http: Http;
  private _threadService: ThreadService;
  private _io: any;
  private _messagesObservers: any;
  private _dataStore: { messages: Array<Message> };

  constructor(http: Http, threadService: ThreadService,private _router:Router,
				private _authenticationService: AuthenticationService) {
    this._io = io();
    this._http = http;
    this._threadService = threadService;
    this.messages = new Observable(observer => this._messagesObservers = observer).share();
    this._dataStore = { messages: [] };
    this._socketOn();     //这里打开了一个socket如果没有验证的话
 //不用验证，一旦加载模块就会自动初始化服务，如果用户未登录则服务加载失败，而导航到其他页面并不会使得服务销毁。
    //else {
			//this._router.navigate(['welcome']);
		//}
  }

  getByThread(threadId) {
    this._http
    .get('/api/threads/'+threadId+'/messages', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .map(res => {
      return res.map(data => {
        let sender = new User(
          data.sender._id,
          data.sender.email,
          data.sender.username,
          data.sender.createdAt
        );
        return new Message(
          data._id,
          sender,
          data.thread,
          data.body,
          data.createdAt
        );
      });
    })
    .subscribe(messages => {
      this._dataStore.messages = messages;
      this._messagesObservers.next(this._dataStore.messages);
    });
  }

  sendMessage(message: Message) {
    this._io.emit('send:im', message);
  }
  on(eventName, callback) {
		if (this._io) {
			this._io.on(eventName, function(data) {
				callback(data);
			});
		}
    };

  private _socketOn() {
    this._io.on('receive:im', message => this._storeMessage(message));
    this._io.on('send:im:success', message => this._storeMessage(message));
  }

  private _storeMessage(message: Message) {
    let sender = new User(
      message.sender._id,
      message.sender.email,
      message.sender.username,
      message.sender.created
    );
    let m = new Message(
      message._id,
      new User(sender._id, sender.email, sender.username, sender.created),
      message.thread,
      message.body,
      message.createdAt
    );
    this._dataStore.messages.push(m);
    this._messagesObservers.next(this._dataStore.messages);
  }
}
