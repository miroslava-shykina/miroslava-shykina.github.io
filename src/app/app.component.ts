import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public telNumber!:string;
  public isValue = false;
  public editIndex!: number;
  public inputFName!: string;
  public inputLName!: string;
  public inputTNum!: string;
  public inputFName2!: string;
  public inputLName2!: string;
  public inputTNum2!: string;
  public isAddBlockNewTel = false;
  public isAddBlockNewTel2 = false;
  public type = 'asc';
  public typed = 'dasc';
  public type2 = 'asc2';
  public typed2 = 'dasc2';
  public type3 = 'asc3';
  public typed3 = 'dasc3';
public field = '';
  public Task!: {
    firstName: string;
    lastName: string;
    telNumber: string;
  };
  
  public arrayTask: Task[] = [
    { firstName: 'Petya', lastName: 'Zhuk', telNumber: '0965321482' },
    { firstName: 'Petro', lastName: 'Petriv', telNumber: '0966268596' },
    { firstName: 'Alejandro', lastName: 'Del Rio Albrechet', telNumber: '093587445' },
    { firstName: 'Vasylyna', lastName: 'Vrublevska', telNumber: '0964554155' },
    { firstName: 'Ira', lastName: 'Tytar', telNumber: '0965544843' },
    { firstName: 'Sofia', lastName: 'Zhuk', telNumber: '0968761677' },
  ];


  constructor() {}

  ngOnInit(): void {}

  addPhons(): void {
    this.isAddBlockNewTel = true;
  }

  deleteUser(index: number): void {
    this.arrayTask.splice(index, 1);
  }

  editUser(index: number): void {
    this.isAddBlockNewTel2 = true;
    this.inputFName2 = this.arrayTask[index].firstName;
    this.inputLName2 = this.arrayTask[index].lastName;
    this.inputTNum2 = this.arrayTask[index].telNumber;
    
    this.editIndex = index;
  }

  save(): void {
    if (this.inputFName&&this.inputLName&&this.inputTNum) {
      this.isValue = false;
      this.Task = {
        firstName: this.inputFName,
        lastName: this.inputLName,
        telNumber: this.inputTNum
      };
      this.arrayTask.push(this.Task);
      this.inputFName = '';
      this.inputLName = '';
      this.inputTNum = '';
      this.isAddBlockNewTel = false;
    } else {
      this.isValue = true;
    }
  }

  save2(): void {
    this.arrayTask[this.editIndex].firstName = this.inputFName2;
    this.arrayTask[this.editIndex].lastName = this.inputLName2;
    this.arrayTask[this.editIndex].telNumber = this.inputTNum2;
    this.inputFName2 = '';
      this.inputLName2 = '';
      this.inputTNum2 = '';
      this.isAddBlockNewTel2 = false;
  }

  btnClose(){
    this.isAddBlockNewTel = false;
  }

  btnClose2(){
    this.isAddBlockNewTel2 = false;
  }

  sort(type: string): void {
    this.type = type;
    this.typed = type
    this.type2 = type;
    this.typed2 = type;
    this.type3 = type;
    this.typed3 = type;
  } 
}

export interface  Task {
  firstName: string;
  lastName: string;
  telNumber: string;
};
