import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: Hero[], orderBy: string = 'none'): Hero[] {

    switch (orderBy) {
      case 'name':
        return array = array.sort((a, b) => (a.name > b.name) ? 1 : -1);

      case 'fly':
        return array = array.sort((a, b) => (a.fly > b.fly) ? -1 : 1);

      case 'color':
        return array = array.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return array;
    }
  }
}
