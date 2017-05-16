import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChatRoutes } from './chat.routes';
import { ChatService } from './services/chat.service';
import { ThreadService }  from './services/thread.service';
import { MessageService }  from './services/message.service';
import { UserService } from './services/user.service';
import { ChatComponent } from './chat.component';
import { ThreadListComponent } from './thread/thread-list.component';
import { ThreadComponent } from './thread/thread.component';
import { MessageFormComponent } from './message/message-form.component';
import { MessageComponent } from './message/message.component';
import { UserListComponent } from './user/user-list.component';
import { MessageListComponent } from './message/message-list.component';
import { ChatHelpComponent } from './chat/chat-help.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ChatRoutes),
  ],
  declarations: [
    ChatComponent,ThreadListComponent,MessageFormComponent,UserListComponent,
    MessageListComponent,ChatHelpComponent,ThreadComponent,MessageComponent
  ],
  exports:[ChatComponent,ThreadListComponent,MessageFormComponent,UserListComponent,
    MessageListComponent,ChatHelpComponent,ThreadComponent,MessageComponent],
  providers: [
    ChatService,ThreadService,MessageService,UserService,
  ]
})
export class ChatModule {}
