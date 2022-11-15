import { of, map, from, Subscription, Observable, Subscriber } from 'rxjs';

const createInterval = (interval: number) => {
  let index = 0;
  return new Observable((subscriber: Subscriber<number>) => {
    setInterval(() => {
      subscriber.next(index++);
      if (index > 5) {
        subscriber.complete();
      }
    }, interval);
  });
};

const interval$ = createInterval(2000);

interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.info('COMPLETED'),
});

setTimeout(
  () =>
    interval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.info('COMPLETED'),
    }),
  4000
);
