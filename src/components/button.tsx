"use client";
import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

export const buttonVariant = cva(
  "py-2.5 px-5 rounded-md text-sm font-semibold",
  {
    variants: {
      variant: {
        default: "bg-text text-background hover:bg-black",
        outline:
          "bg-transparent border-1 border-text text-text hover:bg-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariant> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={cn(buttonVariant({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
