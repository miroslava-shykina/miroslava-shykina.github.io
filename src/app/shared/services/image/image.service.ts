import { Injectable } from '@angular/core';
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

public uploadPercent = 0;

  constructor( private storege: Storage) { }


  async uploadFile(folder: string, name: string, file: File | null): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
  if(file){
    try {
      const storageRef = ref(this.storege, path);
      const task = uploadBytesResumable(storageRef, file);
      percentage(task).subscribe(data => {
        this.uploadPercent = data.progress
      });
      await task;
      url = await getDownloadURL(storageRef);
      
    }catch(e: any) {
        console.error(e);
      }
  }else {
    console.log('wrong format');
  }
  return Promise.resolve(url);
  }

deleteuploadFile(imagePath:string) : Promise<void> {
    const task = ref(this.storege,imagePath);
   return deleteObject(task)
  }
}


