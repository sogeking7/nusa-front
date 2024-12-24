"use client";

import { type HTMLAttributes, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CuboidIcon as Cube } from "lucide-react";

export interface CircleProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
  primaryText?: string;
  secondaryText?: string;
}

export function Circle({
  icon = <Cube strokeWidth={1} />,
  size = "md",
  isActive = false,
  primaryText,
  secondaryText,
  className,
  ...props
}: CircleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedWidth, setExpandedWidth] = useState("0px");
  const textRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: {
      outer: "w-12 h-12",
      inner: "w-10 h-10",
      icon: "w-5 h-5",
      text: "text-sm gap-0.5",
    },
    md: {
      outer: "w-16 h-16",
      inner: "w-14 h-14",
      icon: "w-6 h-6",
      text: "text-base gap-1",
    },
    lg: {
      outer: "w-24 h-24",
      inner: "w-20 h-20",
      icon: "w-8 h-8",
      text: "text-lg gap-1.5",
    },
  };

  useEffect(() => {
    if (textRef.current) {
      setExpandedWidth(`${textRef.current.scrollWidth + 64}px`); // 64px for padding and icon
    }
  }, [primaryText, secondaryText]);

  return (
    <div
      className={cn("relative", sizeClasses[size].outer, className)}
      {...props}
    >
      <div
        className={cn(
          "absolute left-0 top-0 flex cursor-pointer items-center rounded-full bg-[#101011]/80",
          "ease-spring transition-all duration-300",
          isExpanded ? expandedWidth : sizeClasses[size].outer,
          "h-auto",
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full",
            "border border-white/20 hover:border-primary-green",
            "bg-[#101011]/80",
            sizeClasses[size].inner,
          )}
        >
          <div className={cn("text-white", sizeClasses[size].icon)}>{icon}</div>
        </div>

        {(primaryText || secondaryText) && (
          <div
            ref={textRef}
            className={cn(
              "flex flex-col px-4",
              sizeClasses[size].text,
              "overflow-hidden whitespace-nowrap",
              "transition-all duration-300",
              isExpanded
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0",
            )}
          >
            {primaryText && (
              <span className="font-medium text-white">{primaryText}</span>
            )}
            {secondaryText && (
              <span className="text-gray-400">{secondaryText}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
