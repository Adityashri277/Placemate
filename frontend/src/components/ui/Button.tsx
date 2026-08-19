// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = true,
  className = "",
  ...props
}) => {
  const baseStyles =
    "py-3.5 px-6 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]";

  const variants = {
    primary:
      "bg-[#00a8cc] hover:bg-[#0092b3] text-white shadow-lg shadow-cyan-500/25",
    outline:
      "border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};