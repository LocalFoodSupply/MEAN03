import { Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { MessageListComponent } from './message/message-list.component';
import { ChatHelpComponent } from './chat/chat-help.component';


export const ChatRoutes: Routes = [{
  path: 'messages',
  component: ChatComponent,
  children: [
    { path: '', component:ChatHelpComponent },
    { path: ':identifier', component:MessageListComponent},
  ],
}];
