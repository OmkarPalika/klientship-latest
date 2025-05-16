import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/lib/servicesData";

export function EditServiceDialog({ open, onOpenChange, editForm, setEditForm, onSubmit }: { open: boolean, onOpenChange: (open: boolean) => void, editForm: ServiceCard, setEditForm: React.Dispatch<React.SetStateAction<ServiceCard>>, onSubmit: (e: React.FormEvent) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
          <DialogDescription>Update service details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input type="text" name="title" value={editForm.title} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} placeholder="Title" required />
          <Input type="text" name="price" value={editForm.price} onChange={e => setEditForm(f => ({ ...f, price: e.target.value }))} placeholder="Price" required />
          <Input type="text" name="description" value={editForm.description} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} placeholder="Description" required />
          <div>
            <label className="block mb-1 font-medium">Features</label>
            {editForm.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex gap-2 mb-1">
                <Input type="text" value={feature} onChange={e => setEditForm(f => ({ ...f, features: f.features.map((ft: string, i: number) => i === idx ? e.target.value : ft) }))} placeholder={`Feature ${idx + 1}`} required={idx === 0} />
                {editForm.features.length > 1 && (
                  <Button type="button" size="icon" variant="ghost" onClick={() => setEditForm(f => ({ ...f, features: f.features.filter((_: string, i: number) => i !== idx) }))}>-</Button>
                )}
                {idx === editForm.features.length - 1 && (
                  <Button type="button" size="icon" variant="ghost" onClick={() => setEditForm(f => ({ ...f, features: [...f.features, ""] }))}>+</Button>
                )}
              </div>
            ))}
          </div>
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
