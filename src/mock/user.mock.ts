interface User {
  id: number;
  role: string;
  name: string;
}

export enum Roles {
  ADMIN = "Admin",
  USER = "User"
}

const user: User[] = [];
