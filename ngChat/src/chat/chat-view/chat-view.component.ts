import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/models/Chat/chat.model';
import { Registration } from 'src/models/Registration/registration.model';
import { ChatService } from 'src/services/chat-service.service';
import { RegisterService } from 'src/services/register-service.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  panelOpenState = false;
  user?: Registration | any;

  userChats: Chat[] = [];
  constructor(private chatService: ChatService, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.chatService.chats$.subscribe((chats => this.userChats = chats));
    this.registerService.users$.subscribe((user => this.user = user));
    // console.log(this.user);
    this.chatService.fetchChats(this.user?.chatRoom);
  }

  sendChatMessage(message: string, evt: Event): void {
    evt.preventDefault();

    const chat: Chat = {
      message,
      timestamp: new Date().toDateString(),
      chatRoom: this.user.chatRoom,
      screenName: this.user.name
    }

    this.chatService.addChat(chat);
  }
}
