import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss']
})
export class TablelistComponent implements OnInit {

  @Input() arrayTask!: {
    name: string;
    status: string;
    isChecked: boolean;
    isDisabled: boolean;
  }[];

  @Output() fromChild = new EventEmitter<number>();

  public taskNew!: string;
  public editStatus = false;
  public editIndex!: number;
  public status = 'IN PROGRES';
  public isChecked = false;
  public count!: any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number): void {
    this.arrayTask.splice(index, 1);
    this.count = this.arrayTask.length;
    this.fromChild.emit(this.count);
  }

  editUser(index: number): void {
    this.taskNew = this.arrayTask[index].name;
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEditUser(): void {
    this.arrayTask[this.editIndex].name = this.taskNew;
    this.arrayTask[this.editIndex].status = 'IN PROGRES';
    this.arrayTask[this.editIndex].isChecked = false;
    this.arrayTask[this.editIndex].isDisabled = true;
    this.taskNew = '';
    this.editStatus = false;
  }

  changeChack(index: number): void {
    if (this.arrayTask[index].isChecked === true) {
      this.arrayTask[index].isChecked = false;
      this.arrayTask[index].status = 'IN PROGRES';
      this.arrayTask[index].isDisabled = true;
    } else {
      this.arrayTask[index].isChecked = true;
      this.arrayTask[index].status = 'Done';
      this.arrayTask[index].isDisabled = false;
    }
  }
}
