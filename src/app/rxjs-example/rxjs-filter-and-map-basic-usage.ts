import { filter, interval, map, take } from 'rxjs';

const interval$ = interval(1000);

interval$
  .pipe(
    map((value: number) => value * 2),
    filter((value: number) => value > 4 && value < 10)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('COMPLETED'),
  });
