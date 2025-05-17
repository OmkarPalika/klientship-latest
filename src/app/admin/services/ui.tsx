import { useServicesStore } from "@/lib/servicesStore";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ServiceCard, initialCards } from "@/lib/servicesData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Row } from "@tanstack/react-table";
import { EditServiceDialog } from "./EditServiceDialog";
import { ConfirmPopover } from "../ConfirmPopover";
import { useAuth, hasPermission } from "../../auth/AuthContext";

export function useServicesState() {
  const cards = useServicesStore((state) => state.cards);
  const addCard = useServicesStore((state) => state.addCard);
  const updateCard = useServicesStore((state) => state.updateCard);
  const removeCard = useServicesStore((state) => state.removeCard);
  const setCards = useServicesStore((state) => state.setCards);
  return { cards, addCard, updateCard, removeCard, setCards };
}

export function useServicesLocalState() {
  const [services, setServices] = useState<ServiceCard[]>(initialCards);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  return { services, setServices, addDialogOpen, setAddDialogOpen };
}

export function AddServiceButton({ onClick }: { onClick?: () => void }) {
  const { user } = useAuth();
  if (!hasPermission(user, "service:add")) return null;
  return (
    <Button variant="default" onClick={onClick}>Add Service</Button>
  );
}

export function AddServiceDialog({ open, onOpenChange, onAddService }: { open: boolean, onOpenChange: (open: boolean) => void, onAddService: (service: Omit<ServiceCard, "id">) => void }) {
  const [form, setForm] = useState({ title: "", price: "", description: "", features: [""] });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <DialogDescription>Enter service details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={e => { e.preventDefault(); onAddService({ ...form, features: form.features.filter(f => f.trim() !== "") }); }} className="space-y-4">
          <Input
            type="text"
            name="title"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            placeholder="Title"
            required
          />
          <Input
            type="text"
            name="price"
            value={form.price}
            onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
            placeholder="Price"
            required
          />
          <Input
            type="text"
            name="description"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            placeholder="Description"
            required
          />
          <div>
            <label className="block mb-1 font-medium">Features</label>
            {form.features.map((feature, idx) => (
              <div key={idx} className="flex gap-2 mb-1">
                <Input
                  type="text"
                  value={feature}
                  onChange={e => setForm(f => ({ ...f, features: f.features.map((ft, i) => i === idx ? e.target.value : ft) }))}
                  placeholder={`Feature ${idx + 1}`}
                  required={idx === 0}
                />
                {form.features.length > 1 && (
                  <Button type="button" size="icon" variant="ghost" onClick={() => setForm(f => ({ ...f, features: f.features.filter((_, i) => i !== idx) }))}>-</Button>
                )}
                {idx === form.features.length - 1 && (
                  <Button type="button" size="icon" variant="ghost" onClick={() => setForm(f => ({ ...f, features: [...f.features, ""] }))}>+</Button>
                )}
              </div>
            ))}
          </div>
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

export function ServiceReorderCell({ row, moveCard, canMoveUp, canMoveDown }: { row: { index: number }, moveCard: (from: number, to: number) => void, canMoveUp: boolean, canMoveDown: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Button variant="ghost" size="icon" onClick={() => moveCard(row.index, row.index - 1)} disabled={!canMoveUp}>
        ↑
      </Button>
      <Button variant="ghost" size="icon" onClick={() => moveCard(row.index, row.index + 1)} disabled={!canMoveDown}>
        ↓
      </Button>
    </div>
  );
}

export function ServiceActions({ row, services, setServices }: { row: Row<ServiceCard>, services: ServiceCard[], setServices: React.Dispatch<React.SetStateAction<ServiceCard[]>> }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    title: row.original.title,
    price: row.original.price,
    description: row.original.description,
    features: row.original.features as string[],
  });

  const handleDeleteMenuItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleDelete = () => {
    setServices(services.filter((s: ServiceCard) => s.title !== row.original.title));
    setOpen(false);
  };

  const handleEdit = () => {
    setEditDialogOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServices(services.map((s: ServiceCard) => s.title === row.original.title ? { ...s, ...editForm, features: editForm.features.filter((f: string) => f.trim() !== "") } : s));
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
          {hasPermission(user, "service:edit") && <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>}
          <DropdownMenuSeparator />
          {hasPermission(user, "service:delete") && (
            <ConfirmPopover open={open} setOpen={setOpen} onConfirm={handleDelete} message="Are you sure you want to delete this service?">
              <DropdownMenuItem
                onMouseDown={handleDeleteMenuItem}
                onSelect={e => e.preventDefault()}
                tabIndex={0}
                onBlur={e => e.preventDefault()}
              >
                Delete
              </DropdownMenuItem>
            </ConfirmPopover>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <EditServiceDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} editForm={editForm} setEditForm={setEditForm} onSubmit={handleEditSubmit} />
    </>
  );
}
