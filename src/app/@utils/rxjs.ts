import { Observable } from 'rxjs';

export const excludeValue =
  <T>(filterValue: T) =>
  (source: Observable<T>): Observable<T> =>
    new Observable((subscriber) =>
      source.subscribe({
        next: (value) => {
          if (value !== filterValue) {
            subscriber.next(value);
          }
        },
        error: (error) => subscriber.error(error),
        complete: () => subscriber.complete(),
      })
    );
