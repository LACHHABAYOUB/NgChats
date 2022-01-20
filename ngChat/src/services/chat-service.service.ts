import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chat } from 'src/models/Chat/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private userChats: BehaviorSubject<Chat[]>;

  constructor(private client: HttpClient) {
    this.userChats = new BehaviorSubject<Chat[]>(chats)
  }

  get chats$(): Observable<Chat[]> {
    return this.userChats.asObservable();
  }

  fetchChats(room: string): void {
    this.client.get<Chat[]>(`https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=${room}`).subscribe(data => {
      this.userChats.next(data)
    })
  }

  addChat(chat: Chat): void {
    // console.log(chat);
    this.client.post<Chat>(`https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage/`,
      chat
    ).pipe(
      take(1),
      map(() => {
        console.log('it worked')
        this.fetchChats(chat.chatRoom)
      })
    ).subscribe();
  }
}

const chats: Chat[] = [
  {
    message: "Message 1",
    timestamp: "string",
    chatRoom: "Room 1",
    screenName: "User 1"
  },
  {
    message: "Message 2",
    timestamp: "string",
    chatRoom: "Room 2",
    screenName: "User 2"
  }
]


// export class RegisterService {
//   private users: BehaviorSubject<Registration[]>;

//   constructor() {
//     this.users = new BehaviorSubject<Registration[]>(registeredUsers)
//   }

//   get users$(): Observable<Registration[]> {
//     return this.users.asObservable();
//   }

//   addUser(user: Registration): void {
//     const users: any = this.users.value;
//     const newUsers = [...users, user];
//     this.users.next(newUsers);
//   }
// }

// const registeredUsers: Registration[] = [
//   {
//     name: "user 1",
//     chatRoom: "chat three",
//   },
//   {
//     name: "user 2",
//     chatRoom: "chat two",
//   }
// ]

// const registeredUsers: Registration[] = [
//   {
//     name: "user 1",
//     chatRoom: "chat three",
//   },
//   {
//     name: "user 2",
//     chatRoom: "chat two",
//   }
// ]

