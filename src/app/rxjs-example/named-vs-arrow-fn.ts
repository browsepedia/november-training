export class FirstClass {
  private _value = 'Whatever';

  public myCallback = () => {
    console.log(this._value);
  };
}

export class SecondClass {
  private _value = 'SecondClass';

  myFunction(fn: () => void): void {
    fn();
  }
}

const firstClass = new FirstClass();
const secondClass = new SecondClass();

secondClass.myFunction(firstClass.myCallback);
