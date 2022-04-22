import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  public status = 'IN PROGRES';
  public isChecked = false;
  public isDisabled = true;
  public isValue = false;
  public newTask!: string;
  public emit = 6;

  public task!: {
    name: string;
    status: string;
    isChecked: boolean;
    isDisabled: boolean;
  };

  public arrayTask = [
    { name: 'HTML5', status: 'Done', isChecked: true, isDisabled: false },
    { name: 'CSS3', status: 'Done', isChecked: true, isDisabled: false },
    { name: 'SCSS', status: 'IN PROGRES', isChecked: false, isDisabled: true },
    { name: 'Java Script', status: 'IN PROGRES', isChecked: false, isDisabled: true },
    { name: 'JQuery', status: 'IN PROGRES', isChecked: false, isDisabled: true },
    { name: 'Angular', status: 'IN PROGRES', isChecked: false, isDisabled: true },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.newTask) {
      this.isValue = false;
      this.task = {
        name: this.newTask,
        status: this.status,
        isChecked: this.isChecked,
        isDisabled: this.isDisabled,
      };
      this.arrayTask.push(this.task);
      console.log(this.arrayTask);
      this.newTask = '';
      this.emit = this.emit + 1;
    } else {
      this.isValue = true;
    }
  }

  getCount(data: number): void {
    this.emit = data;
  }

}
