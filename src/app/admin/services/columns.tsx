import { ColumnDef } from "@tanstack/react-table";
import { ServiceCard } from "@/lib/servicesData";

export const serviceColumns: ColumnDef<ServiceCard>[] = [
  {
    id: "reorder",
    header: "",
    // cell: ({ row, table }) => {
    //   // The actual reorder UI is injected in the page for full control
    //   return null;
    // },
    size: 40,
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    enableSorting: true,
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "features",
    header: "Features",
    enableSorting: false,
    cell: ({ row }) => (
      <ul className="list-disc pl-4">
        {row.original.features.map((f: string, i: number) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "actions",
    cell: () => null, // The actual cell is injected in the page for full CRUD
  },
];
