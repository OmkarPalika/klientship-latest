import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../../lib/usersData";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: () => null, // The actual cell is injected in the page for full CRUD
  },
];
