import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/services/register-service.service';


@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  chatRooms: string[] = ['Fun with Taxes', 'The Dark Web', 'Everything NG', 'Mystic 1-4-U'];

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerService.users$.subscribe((users => console.log(users)));
  }

  registerUser(user: string, room: string, evt: Event): void {
    evt.preventDefault()

    this.registerService.addUser(
      {
        name: user,
        chatRoom: room,
      }
    );

    this.router.navigate(['/', 'chat']);
  }

}
