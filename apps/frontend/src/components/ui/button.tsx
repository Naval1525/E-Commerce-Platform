import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-0 text-sm font-semibold transition-[color,transform] duration-75 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60 active:scale-[0.97]",
  {
  variants: {
    variant: {
      default: "bg-brand-blue text-white hover:bg-blue-700",
      secondary: "bg-orange-500 text-white hover:bg-orange-600",
      ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
      outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
    },
    size: {
      default: "min-h-[42px] px-4 py-2.5",
      sm: "min-h-[34px] px-3 py-2 text-sm",
      lg: "min-h-12 px-5 py-3",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
