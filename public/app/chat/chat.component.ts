import {Component} from '@angular/core';
import {ChatService} from './chat.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'chat',
  templateUrl: 'app/chat/chat.template.html',
  providers: [ChatService]
})
export class ChatComponent {

  constructor(private _chatService: ChatService,
			  private _authenticationService: AuthenticationService,
			  private _router:Router) {
	  if (!this._authenticationService.isLoggedIn())
	  { this._router.navigate(['signin']);}
  	console.log("gg");

  }
	ngOnInit() {if (!this._authenticationService.isLoggedIn())
	{this._router.navigate(['signin']);}
		//导航到其他页面并不会使得服务销毁,原来页面的组件可以等待认证后才予以显示，如message-form
		};

	ngOnDestroy() {
		console.log("destroy it ")
	}

/*	messageText: string;
	messages: Array<any>;

	constructor(private _chatService: ChatService) {}



	sendMessage() {
		var message = {
			text: this.messageText,
		};

		this._chatService.emit('chatMessage', message);
		this.messageText = ''
	}


	}*/
}