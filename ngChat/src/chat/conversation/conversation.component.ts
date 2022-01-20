import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/models/Chat/chat.model';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @Input() user?: Chat;

  constructor() { }

  ngOnInit(): void {
  }

}
