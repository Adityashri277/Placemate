// components/Logo.tsx
import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-teal-400 rounded-xl shadow-lg shadow-cyan-500/20 transform group-hover:rotate-12 transition-all duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-950">
          <path d="M22 10v6M2 10l10-8 10 8M6 10v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
          <path d="M12 15v.01" />
        </svg>
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-white">
        Place<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Mate</span>
      </span>
    </Link>
  );
}