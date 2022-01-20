import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from 'src/models/Registration/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private user: BehaviorSubject<Registration>;

  constructor() {
    this.user = new BehaviorSubject<Registration>({
      name: '',
      chatRoom: '',
    });
  }

  get users$(): Observable<Registration> {
    return this.user.asObservable();
  }

  addUser(user: Registration): void {
    this.user.next(user);
  }
}

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
