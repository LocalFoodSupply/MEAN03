import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { ThreadService } from '../services/thread.service';
import { Thread } from '../datatypes/thread';
import { Message } from '../datatypes/message';
import { MessageComponent } from './message.component';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'message-list',
    template: `
      <div class="message-list">
        <div *ngIf="messages.length === 0" class="empty-message-list">
          <h3>No messages so far :)</h3>
        </div>
        <message
          *ngFor="let message of messages"
          [message]="message"
          ></message>
      </div>
    `
})
export class MessageListComponent {
  public messages: Array<Message>=[];
  private _messageService: MessageService;
  private _threadService: ThreadService;
  constructor(
    messageService: MessageService,
    threadService: ThreadService,
    private _route: ActivatedRoute
  ) {
    this._messageService = messageService;
    this._threadService = threadService;
    //this.messages =this._messageService.messages;
    this._messageService.messages.subscribe(messages => this.messages = messages);
    //this._messageService.on('receive:im', message =>this.messages.push(message) );
    this._route.params.subscribe(params => {
        let threadId: string;
        threadId = params['identifier'];
        this._threadService.setCurrentThread(new Thread(threadId));
        this._messageService.getByThread(threadId);
        });

  }
}
