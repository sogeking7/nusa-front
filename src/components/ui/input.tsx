import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-[50px] border border-[#FFFFFF33] bg-transparent px-7 text-sm text-[#FFFFFF66] placeholder-[#FFFFFF66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF55] focus-visible:ring-offset-[#00000052] disabled:cursor-not-allowed disabled:opacity-100",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
