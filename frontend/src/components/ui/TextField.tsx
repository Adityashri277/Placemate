// src/components/ui/TextField.tsx
import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  leftIcon,
  rightIcon,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-slate-300 mb-1 ml-3">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-4 text-slate-400 flex items-center justify-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          className={`w-full py-3.5 ${
            leftIcon ? "pl-11" : "pl-5"
          } ${
            rightIcon ? "pr-11" : "pr-5"
          } rounded-full border border-slate-700/80 bg-slate-800/90 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 text-slate-400 flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-400 ml-4">{error}</p>}
    </div>
  );
};