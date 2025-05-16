import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EditUserDialog({ open, onOpenChange, editForm, setEditForm, onSubmit }: {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  editForm: { name: string; email: string; status: string },
  setEditForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; status: string }>>,
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update user details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            value={editForm.name}
            onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={editForm.email}
            onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))}
            placeholder="Email"
            required
          />
          <select
            name="status"
            value={editForm.status}
            onChange={e => setEditForm(f => ({ ...f, status: e.target.value }))}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="flex gap-2 justify-end">
            <Button type="submit" variant="default">Update</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
