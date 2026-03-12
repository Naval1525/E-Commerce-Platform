import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = ({
  className,
  sideOffset = 8,
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        "z-50 min-w-[180px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl outline-none",
        className
      )}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

const DropdownMenuItem = ({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:bg-blue-50",
      className
    )}
    {...props}
  />
);

const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator className={cn("my-1 h-px bg-slate-200", className)} {...props} />
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
};
