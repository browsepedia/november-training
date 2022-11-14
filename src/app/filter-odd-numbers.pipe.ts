import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOddNumbers',
})
export class FilterOddNumbersPipe implements PipeTransform {
  transform(value: number[]): number[] {
    return value.filter((num) => num % 2 === 1);
  }
}
