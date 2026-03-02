import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
const listeners = new Set<(theme: Theme) => void>();

function getInitialTheme(): Theme {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved as Theme;
    }
    return 'light';
}

let currentTheme: Theme = getInitialTheme();

function setGlobalTheme(theme: Theme) {
    currentTheme = theme;
    if (typeof window !== 'undefined') {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }
    listeners.forEach(listener => listener(theme));
}

// Ensure theme is applied on script load
if (typeof window !== 'undefined') {
    setGlobalTheme(currentTheme);
}

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(currentTheme);

    useEffect(() => {
        listeners.add(setThemeState);
        return () => {
            listeners.delete(setThemeState);
        };
    }, []);

    const toggleTheme = () => {
        setGlobalTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    return { theme, toggleTheme };
}
