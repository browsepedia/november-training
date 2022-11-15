import { ReplaySubject } from "rxjs";

const subject = new ReplaySubject<number>(5);
subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe((value) => console.log(value));

subject.next(7);
