import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActionResponse } from 'src/app/shared/interfaces/actions/action.interface';
import { ActionService } from 'src/app/shared/services/action/action.service';
import {
  deleteObject,
  getDownloadURL,
  percentage,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  public adminActions: Array<IActionResponse> = [];
  public isAddet = true;
  public editStatus = false;
  public editNumber!: number;
  public idEdit = 0;
  public actionForm!: FormGroup;
  public uploadPercent!: number;
  public isUploaded = false;
  private currentActionId = 0;

  constructor(
    private fb: FormBuilder,
    private actionService: ActionService,
    private storege: Storage
  ) {}

  ngOnInit(): void {
    this.initActionForm();
    this.loadActions();
  }

  initActionForm(): void {
    this.actionForm = this.fb.group({
      date: [new Date()],
      name: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [
        'https://monosushi.com.ua/wp-content/uploads/2022/07/rol-tyzhnya-3.0_page-0001-1-scaled-697x379.jpg',
        Validators.required,
      ],
    });
  }

  loadActions(): void {
    this.actionService.getAll().subscribe((data) => {
      this.adminActions = data;
    });
  }

  addAction(): void {
    if (this.editStatus) {
      this.actionService
        .update(this.actionForm.value, this.currentActionId)
        .subscribe(() => {
          this.loadActions();
        });
    } else {
      this.actionService.create(this.actionForm.value).subscribe(() => {
        this.loadActions();
      });
    }
    this.isAddet = true;
    this.actionForm.reset();
    this.editStatus = false;
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editAction(action: IActionResponse): void {
    this.actionForm.patchValue({
      date: new Date(),
      name: action.name,
      title: action.title,
      description: action.description,
      imagePath: action.imagePath,
    });
    this.currentActionId = action.id;
    this.editStatus = true;
    this.isAddet = false;
    this.isUploaded = true;
  }

  deleteAction(action: IActionResponse): void {
    console.log(action);
    this.actionService.delete(action.id).subscribe(() => {
      this.loadActions();
    });
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('images', file.name, file)
      .then((data) => {
        this.actionForm.patchValue({
          imagePath: data,
        });
        this.isUploaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async uploadFile(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
    if (file) {
      try {
        const storageRef = ref(this.storege, path);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe((data) => {
          this.uploadPercent = data.progress;
        });
        await task;
        url = await getDownloadURL(storageRef);
      } catch (e: any) {
        console.error(e);
      }
    } else {
      console.log('wrong format');
    }
    return Promise.resolve(url);
  }

  valueByControl(control: string): string {
    return this.actionForm.get(control)?.value;
  }

  deleteImage(): void {
    const task = ref(this.storege, this.valueByControl('imagePath'));
    deleteObject(task).then(() => {
      console.log('File deleted');
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.actionForm.patchValue({
        imagePath: null,
      });
    });
  }

  adding(): void {
    if (this.isAddet == true) {
      this.isAddet = false;
    } else {
      this.isAddet = true;
    }
  }
}
