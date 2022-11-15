import {
  of,
  interval,
  take,
  exhaustMap,
  delay,
  tap,
  combineLatest,
} from 'rxjs';

const obs1 = interval(1000);
const obs2 = of('Observable2');
const obs3 = interval(5000);

combineLatest([obs1, obs2, obs3]).subscribe({
  next: ([value1, value2, value3]) => console.log(value1, value2, value3),
  complete: () => console.info('COMPLETED'),
});
