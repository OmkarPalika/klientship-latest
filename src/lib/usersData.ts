// User type and mock data for admin users table
export type User = {
  id: number;
  name: string;
  email: string;
  status: string;
  role?: "superadmin" | "admin";
};

export const users: User[] = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", status: "active" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", status: "inactive" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", status: "active" },
];
