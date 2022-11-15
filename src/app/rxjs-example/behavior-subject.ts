import { BehaviorSubject, interval } from 'rxjs';

const subject = new BehaviorSubject<number>(100);

setTimeout(() => subject.subscribe((value) => console.log(value)), 5000);

interval(2000).subscribe((index) => subject.next(index));
