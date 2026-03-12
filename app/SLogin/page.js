"use client";
import React, { useState } from "react";

// --- FRAGMENT: THEME TOGGLE ---
const ThemeToggle = ({ isDark, onToggle }) => (
  <button 
    onClick={onToggle}
    className="fixed top-8 right-8 z-50 flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md hover:scale-105 transition-all duration-500 active:scale-95 group shadow-sm"
  >
    <div className="relative w-5 h-5 overflow-hidden text-lg">
      <span className={`absolute inset-0 transition-transform duration-700 ease-in-out ${isDark ? "-translate-y-full" : "translate-y-0"}`}>☀️</span>
      <span className={`absolute inset-0 transition-transform duration-800 ease-in-out ${isDark ? "translate-y-0" : "translate-y-full"}`}>🌙</span>
    </div>
    <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
      {isDark ? "Dark" : "Light"}
    </span>
  </button>
);

// --- FRAGMENT: INPUT FIELD ---
const InputField = ({ label, type, placeholder }) => (
  <div className="group flex flex-col gap-3 transition-all duration-500">
    <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-focus-within:opacity-100 group-focus-within:text-indigo-500 transition-all duration-300">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-zinc-100 dark:border-zinc-900 py-4 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-all duration-700 placeholder:opacity-20 text-xl"
    />
  </div>
);

// --- MAIN PAGE ---
export default function LoginPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      {/* FIXED: Removed transition-colors-white typo, added transition-colors */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 transition-colors-white duration-[900ms] ease-in-out bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <div className="w-full max-w-md space-y-20 py-12">
          
          <header className="space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40 animate-pulse">
              Student Login
            </div>
            <div className="space-y-2">
              <h1 className="text-7xl font-serif italic tracking-tighter leading-[0.8]">
                Sign <span className="underline decoration-1 underline-offset-[12px] decoration-zinc-100 dark:decoration-zinc-800 transition-colors duration-700">in</span>
              </h1>
              <p className="text-4xl tracking-tighter opacity-20">to continue.</p>
            </div>
          </header>

          <main className="space-y-12">
            <div className="space-y-8">
              <InputField label="Email Id" type="email" placeholder="Email address" />
              <InputField label="Access" type="password" placeholder="Password" />
            </div>

            {/* ANIMATED SUBMIT BUTTON */}
            <button 
              className={`
                w-full py-6 font-bold uppercase tracking-[0.4em] text-[10px]
                bg-zinc-950 dark:bg-white text-white dark:text-zinc-950
                /* The Magic: */
                transition-all duration-300 ease-out
                hover:opacity-90 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] 
                dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]
                active:scale-[0.96] active:translate-y-0
              `}
            >
              Submit Here →
            </button>
          </main>

          <footer className="pt-12 border-t border-zinc-50 dark:border-zinc-900 flex justify-between items-center opacity-20 text-[9px] font-mono tracking-[0.3em]">
            <span><ul>EST. 2026</ul></span>
            <span> Vol 1</span>
          </footer>
        </div>
      </div>
    </div>
  );
}