import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perforate',
})
export class PerforatePipe<T> implements PipeTransform {
  transform(value: T, key: keyof T): T[keyof T] {
    if (key === undefined) {
      throw new Error(
        'Must provide a key in order to use the `perforate` pipe.'
      );
    }

    return value[key];
  }
}
