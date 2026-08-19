// src/components/auth/AuthLayout.tsx
import React from "react";
import { BrandPanel } from "./BrandPanel";

interface AuthLayoutProps {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans relative overflow-hidden flex items-center justify-center p-4 lg:p-8">
      {/* Soft Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Main Auth Container Card */}
      <div className="w-full max-w-5xl bg-[#111827]/90 backdrop-blur-2xl border border-slate-800/90 rounded-[2.5rem] shadow-2xl p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch relative z-10">
        {/* Left Column - Form */}
        <div className="p-4 lg:p-6 flex flex-col justify-between">
          {(eyebrow || title || description) && (
            <div className="mb-4">
              {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h1 className="text-2xl font-bold text-white mt-1">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-xs text-slate-400 mt-1">{description}</p>
              )}
            </div>
          )}
          {children}
        </div>

        {/* Right Column - Brand Panel */}
        <div className="hidden lg:block">
          <BrandPanel />
        </div>
      </div>
    </div>
  );
};