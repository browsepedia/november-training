import { of, map, from, interval, Subscription } from 'rxjs';

const interval$ = interval(2000);

const sub1 = interval$.subscribe({
  next: (value) => console.log(value),
  error: () => console.error('error'),
  complete: () => console.info('finished'),
});

let sub2: Subscription;
setTimeout(
  () =>
    (sub2 = interval$.subscribe({
      next: (value) => console.log('FROM sub2:', value),
      error: () => console.error('error'),
      complete: () => console.info('finished'),
    })),
  5000
);

setTimeout(() => sub1.unsubscribe(), 10000);
setTimeout(() => sub2.unsubscribe(), 15000);

// const ar = [1, 2, 3, 4, 5];

// from(ar).subscribe({
//   next: (value) => console.log(value),
//   error: () => console.error('error'),
//   complete: () => console.info('finished'),
// });

