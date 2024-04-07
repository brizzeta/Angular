import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: { name: string, salary: number, birth: Date, isSpan: boolean }[] = [];
  name: string = "";
  salary: number = 0;
  birth: Date = new Date();
  isSpan: boolean = true;

  addUser(){
    if(this.name !== '' && this.salary !== null && this.birth !== null){
      this.users.push({ name: this.name, salary: this.salary, birth: this.birth, isSpan: true });
      this.name = "";
      this.salary = 0;
      this.birth = new Date();
    }
  }

  removeUser(index: number){
    this.users.splice(index,1);
  }

  editUser(user: any) {
    user.isSpan = !user.isSpan;
  }
}
