// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { UserCircle, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  // Simulating authentication state. 
  // Change to true when you implement real auth.
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showAlert, setShowAlert] = useState(false);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setShowAlert(true);
      // Auto-hide the alert after 4 seconds
      setTimeout(() => setShowAlert(false), 4000); 
    } else {
      // Logic for when logged-in user clicks profile (e.g., open dropdown)
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-4">
          


            {/* Profile Icon / Auth Actions */}
            <div className="flex items-center gap-4 pl-4 border-l border-slate-700/80">
              <button 
                onClick={handleProfileClick}
                className="p-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all focus:outline-none"
                aria-label="User Profile"
              >
                <UserCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Aesthetic Alert for Unauthenticated Users */}
      {showAlert && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 flex items-center gap-3 bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 rounded-lg px-4 py-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-sm font-medium text-slate-200">
            Please <Link href="/login" className="text-cyan-400 hover:underline">login</Link> or <Link href="/register" className="text-cyan-400 hover:underline">sign up</Link> first to access resources.
          </p>
          <button onClick={() => setShowAlert(false)} className="ml-2 text-slate-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}