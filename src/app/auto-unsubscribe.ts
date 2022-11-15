export function AutoUnsubscribe() {
  return function (constructor: any) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (const propName of Object.keys(this)) {
        const property = this[propName];

        if (property && typeof property.unsubscribe === 'function') {
          property.unsubscribe();
        }
      }

      if (original && typeof original === 'function') {
        original.apply(this, arguments);
      }
    };
  };
}
