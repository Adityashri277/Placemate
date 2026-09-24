// src/components/auth/LoginForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { login } from "@/lib/auth";

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({
        email,
        password,
      });

      console.log("Login successful:", response);

      alert("Login successful!");

      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div>
        {/* Form Title */}
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
            Welcome back
          </h2>

          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Sign in to access your preparation modules, practice sets, and
            track your progress.
          </p>
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />

          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<Lock className="w-4 h-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-slate-400 hover:text-slate-200" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-400 hover:text-slate-200" />
                )}
              </button>
            }
            required
          />

          {/* Utility Actions */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900/80 text-cyan-500 focus:ring-cyan-500/20"
              />
              <span>Remember me</span>
            </label>

            <Link
              href="/forgot-password"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full mt-2">
            Sign in
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>

          <div className="relative flex justify-center text-xs">
            <span className="bg-[#111827] px-3 text-slate-500">
              or
            </span>
          </div>
        </div>

        {/* Link to Register */}
        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};