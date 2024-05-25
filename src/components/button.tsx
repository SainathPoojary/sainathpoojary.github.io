import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariant = cva(
  "py-2.5 px-5 rounded-md text-sm font-semibold active:scale-90 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-text text-background hover:bg-black dark:text-dark-background dark:bg-dark-text dark:hover:bg-gray-100",
        outline:
          "bg-transparent border-1 border-text text-text hover:bg-gray-50 dark:border-gray-400 dark:text-dark-text dark:hover:bg-gray-100 dark:hover:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariant({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
