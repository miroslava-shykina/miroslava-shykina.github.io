import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public login!: string;
  public pass!: string;
  public email!: string;
  public editStatus = false;
  public editIndex!: number;
  public isValue = false;

  public user!: {
    login: any;
    pass: any;
    email: any;
  };

  public arrayUsers = [{
    login: 'Ivan',
    pass: 'Kot',
    email: 'mail.com'
  }];



  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.login && this.pass && this.email) {
      this.isValue = false;
      this.user =
      {
        login: this.login,
        pass: this.pass,
        email: this.email
      }
      this.arrayUsers.push(this.user);
      this.login = '';
      this.pass = '';
      this.email = '';

    } else {
      this.isValue = true;
    }


  }

  deleteUser(index: number): void {
    this.arrayUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.login = this.arrayUsers[index].login;
    this.pass = this.arrayUsers[index].pass;
    this.email = this.arrayUsers[index].email;

    this.editIndex = index;
    this.editStatus = true;
  }

  saveEditUser(): void {
    this.arrayUsers[this.editIndex].login = this.login;
    this.arrayUsers[this.editIndex].pass = this.pass;
    this.arrayUsers[this.editIndex].email = this.email;
    this.login = '';
    this.pass = '';
    this.email = '';
    this.editStatus = false;
  }

}
