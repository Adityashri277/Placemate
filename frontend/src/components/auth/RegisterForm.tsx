// src/components/auth/RegisterForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { register } from "@/lib/auth";

export const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register({
        full_name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration successful:", response);

      alert("Account created successfully!");

      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div>
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
            Create an account
          </h2>

          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Get started with structured practice modules, coding arenas, and
            interview preparation.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
            leftIcon={<User className="w-4 h-4" />}
            required
          />

          <TextField
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />

          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
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

          <Button type="submit" className="w-full mt-2">
            Create Account
          </Button>
        </form>

        {/* Navigation Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};