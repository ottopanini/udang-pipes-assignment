import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {
  transform(value: any, parameter: string): any {
    return value.sort((x, y) => {
      if (x[parameter] > y[parameter]) {
        return 1;
      } else if (x[parameter] < y[parameter]) {
        return -1;
      } else  {
        return 0;
      }
    });
  }
}
