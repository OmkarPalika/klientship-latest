import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import React from "react";

export function ConfirmPopover({ open, setOpen, onConfirm, message, children }: { open: boolean, setOpen: (open: boolean) => void, onConfirm: () => void, message: string, children: React.ReactNode }) {
  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56" onInteractOutside={e => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <span>{message}</span>
          <div className="flex gap-2 justify-end">
            <Button variant="destructive" size="sm" onClick={onConfirm}>Delete</Button>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
