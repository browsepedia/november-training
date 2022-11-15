import { forkJoin, map, of } from 'rxjs';

interface User {
  id: number;
  name: string;
  statusId: number;
}

interface Status {
  id: number;
  label: string;
}

// http calls
const users$ = of<User[]>([]);
const statuses$ = of<Status[]>([]);

// the rxjs way
const usersWithStatus$ = forkJoin([users$, statuses$]).pipe(
  map(([users, statuses]) => users.map((user) => mapUserStatus(user, statuses)))
);

// doing the calls
usersWithStatus$.subscribe(console.log);

// for refresh
usersWithStatus$.subscribe(console.log);
usersWithStatus$.subscribe(console.log);

// THe promise way
const userPromise = new Promise<User[]>((resolve) => resolve([]));
const statusesPromise = new Promise<Status[]>((resolve) => resolve([]));

const fetchUsers = async () => {
  const [users, statuses] = await Promise.all([userPromise, statusesPromise]);

  return users.map((user) => mapUserStatus(user, statuses));
};

fetchUsers().then((users) => console.log(users));

// for refresh
fetchUsers().then((users) => console.log(users));
fetchUsers().then((users) => console.log(users));

// helper
const mapUserStatus = (
  user: User,
  statuses: Status[]
): User & { status: string } => ({
  ...user,
  status: (statuses.find((status) => status.id === user.statusId) as Status)
    .label,
});
