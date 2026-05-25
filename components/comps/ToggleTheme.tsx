'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/Theme';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    
    const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <div className='justify-end flex'>
            <button
            onClick={toggle}
            className="flex bg-[var(--bg)] items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
        >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        </div>
    );
}