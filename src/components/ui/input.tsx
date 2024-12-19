"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputWrapperVariants = cva(
  "relative flex items-center w-full rounded-full border border-white/20 bg-transparent focus-within:ring-1 focus-within:ring-primary-green",
  {
    variants: {
      size: {
        default: "h-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const inputVariants = cva(
  "w-full bg-transparent text-base md:text-sm text-white placeholder-[#FFFFFF66] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputWrapperVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={cn(inputWrapperVariants({ size }))}>
        {leftIcon && (
          <div className="absolute left-3 flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ size }),
            leftIcon ? "pl-10" : "pl-4",
            rightIcon ? "pr-10" : "pr-4",
            className,
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
