interface User {
  firstName: string;
  lastName: string;
  age: number;
  role: string;
}

type MappedUser = {
  [K in keyof User]: User[K] extends Array<infer U>
    ? U extends number
      ? undefined
      : string
    : User[K];
};

const userUpdateModel: Partial<User> = {
  firstName: '',
};

const fullUser: Required<User> = {
  firstName: 'Gigel',
  lastName: 'Bucur',
  role: 'Mecanic',
  age: 25,
};

const userFirstAndLastName: Pick<User, 'firstName' | 'lastName'> = {
  firstName: 'Gigel',
  lastName: 'Bucur',
};

const userWithoutRole: Omit<User, 'age' | 'role'> = {
  firstName: 'Gigel',
  lastName: 'Bucur',
};

type RoleType = string | null | undefined;

// is basically a string now
type NullableRoleType = Exclude<RoleType, undefined | null>;
type ExtractStringFromRoleType = Extract<RoleType, string | number>;

type NonNullableString = NonNullable<RoleType>;

const correctString: NonNullableString = '';

type SumFn = (num1: number, num2: number) => User;

type SumFnParams = Parameters<SumFn>;
type SumFnReturnType = ReturnType<SumFn>;

const sumFnParams: SumFnParams = [1, 2];

interface MyGenericType<T extends User> {
  id: number;
  data: T;
}

type ExtendedUser = User & {
  middleName: string;
  firstName: number;
};

const myKey = 'whatever';

const isVisibleMap: Record<string, boolean> = {
  user: false,
  topBar: true,
  mainLayout: false,
  [myKey]: false,
};

enum Roles {
  Junior,
  Mid,
  Senior,
}

const roleMap: Record<Roles, User[]> = {
  [Roles.Junior]: [],
  [Roles.Mid]: [],
  [Roles.Senior]: [],
};

interface Rectangle {
  shape: 'rectangle';
  area: number;
  width: number;
  length: number;
}

interface Circle {
  shape: 'circle';
  diameter: number;
  area: number;
}

interface Square {
  shape: 'square';
  area: number;
  width: number;
}

type Shape = Rectangle | Circle | Square;

const calculateArea = (shape: Shape): number => {
  switch (shape.shape) {
    case 'circle':
      return Math.pow(shape.diameter / 2, 2) * Math.PI;
    case 'rectangle':
      return shape.length * shape.width;
    case 'square':
      return shape.width * shape.width;
  }
};
