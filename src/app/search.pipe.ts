import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './app.component';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(array: Task[], field: any): Task[] {
    if (!array) return [];
    if (!field) return array;
    if (/[0-9]/.test(field)) {
      return array.filter((task) =>
        task.telNumber.toLocaleLowerCase().includes(field.toLocaleLowerCase())
      );
    }
    if (!/[0-9]/.test(field)) {
      array.filter((task) =>
        task.firstName.toLocaleLowerCase().includes(field.toLocaleLowerCase())
      );
    }
    return array.filter((task) =>
      task.lastName.toLocaleLowerCase().includes(field.toLocaleLowerCase())
    );
  }
}
