import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import c
t
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className,
}) => {
  return (
    <ShadButton
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md font-medium transition duration-200",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
          "border border-gray-400 text-gray-800 hover:bg-gray-100": variant === "outline",
        },
        className
      )}
    >
      {children}
    </ShadButton>
  );
};

export default Button;
