import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  arr_user:string[] = [];
  str_user:string = "";
  addUser() {
    this.arr_user.push(this.str_user);
  }
}
