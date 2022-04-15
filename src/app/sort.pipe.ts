import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './app.component';
@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(array: Task[], sort: string): Task[] {
    if (!array) return [];
    if (!sort) return array;

    if (sort === 'asc') {
      return array.sort((a, b) =>
        a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
      );
    }
    if (sort === 'dasc') {
      return array.sort((a, b) =>
        a.firstName < b.firstName ? 1 : a.firstName > b.firstName ? -1 : 0
      );
    }
    if (sort === 'asc2') {
      return array.sort((a, b) =>
        a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0
      );
    }
    if (sort === 'dasc2') {
      return array.sort((a, b) =>
        a.lastName < b.lastName ? 1 : a.lastName > b.lastName ? -1 : 0
      );
    }
    if (sort === 'asc3') {
      return array.sort((a, b) =>
        a.telNumber > b.telNumber ? 1 : a.telNumber < b.telNumber ? -1 : 0
      );
    }
    return array.sort((a, b) =>
      a.telNumber < b.telNumber ? 1 : a.telNumber > b.telNumber ? -1 : 0
    );
  }
}
