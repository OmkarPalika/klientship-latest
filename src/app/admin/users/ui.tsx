import { users as initialUsers, User } from "../../../lib/usersData";
import React, { useState } from "react";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ConfirmPopover } from "../ConfirmPopover";
import { EditUserDialog } from "./EditUserDialog";
import { Role } from "../../auth/AuthContext";
import { useAuth, hasPermission } from "../../auth/AuthContext";

export function useUsersState() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  return { users, setUsers, addDialogOpen, setAddDialogOpen };
}

export function AddUserButton({ onClick }: { onClick?: () => void }) {
  const { user } = useAuth();
  if (!hasPermission(user, "user:add")) return null;
  return (
    <Button variant="default" onClick={onClick}>Add User</Button>
  );
}

export function AddUserDialog({ open, onOpenChange, onAddUser }: { open: boolean, onOpenChange: (open: boolean) => void, onAddUser: (user: Omit<User, "id">) => void }) {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", status: "active", role: "admin" as Role });
  if (!hasPermission(user, "user:add")) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Enter user details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={e => { e.preventDefault(); onAddUser(form); }} className="space-y-4">
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
            placeholder="Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
            placeholder="Email"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={e => setForm(f => ({ ...f, status: e.target.value }))} 
            className="w-full border px-3 py-2 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <select
            name="role"
            value={form.role}
            onChange={e => setForm(f => ({ ...f, role: e.target.value as Role }))}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="admin">Admin</option>
            <option value="superadmin">Superadmin</option>
          </select>
          <div className="flex gap-2 justify-end">
            <Button type="submit" variant="default">Add</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function UserActions({ row, users, setUsers }: { row: Row<User>, users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>> }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: row.original.name, email: row.original.email, status: row.original.status });

  const handleDelete = () => {
    setUsers(users.filter(u => u.id !== row.original.id));
    setOpen(false);
  };

  const handleEdit = () => {
    setEditDialogOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers(users.map(u => u.id === row.original.id ? { ...u, ...editForm } : u));
    setEditDialogOpen(false);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          {hasPermission(user, "user:edit") && <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>}
          <DropdownMenuSeparator />
          {/* Only show delete if allowed by RBAC */}
          {hasPermission(user, "user:delete") && (
            <ConfirmPopover
              open={open}
              setOpen={setOpen}
              onConfirm={handleDelete}
              message="Are you sure you want to delete this user?"
            >
              <DropdownMenuItem
                onMouseDown={() => setOpen(true)}
                onSelect={e => e.preventDefault()}
                tabIndex={0}
              >
                Delete
              </DropdownMenuItem>
            </ConfirmPopover>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <EditUserDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        editForm={editForm}
        setEditForm={setEditForm}
        onSubmit={handleEditSubmit}
      />
    </>
  );
}
