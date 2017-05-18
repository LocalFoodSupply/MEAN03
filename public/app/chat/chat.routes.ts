import { Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { MessageListComponent } from './message/message-list.component';
import { ChatHelpComponent } from './chat/chat-help.component';


export const ChatRoutes: Routes = [{
  path: 'chat',
  component: ChatComponent,
  children: [
    { path: 'message', component:ChatHelpComponent },
    { path: 'message/:identifier', component:MessageListComponent},
  ],
}];
