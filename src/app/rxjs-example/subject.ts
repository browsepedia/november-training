import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe((value) => console.log(value));

setTimeout(() => {
  subject.next(1231123);
}, 3000);
