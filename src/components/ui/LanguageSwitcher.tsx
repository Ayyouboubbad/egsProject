import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
];

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    useEffect(() => {
        if (i18n.language) {
            document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = i18n.language;
        }
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 bg-transparent text-inherit text-sm font-bold focus:outline-none rounded-full px-3 py-2 cursor-pointer transition-all hover:bg-brand-500/10 dark:hover:bg-brand-500/10 hover:text-brand-500"
                aria-label="Select Language"
            >
                {currentLang.name}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50 overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full text-center px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-gray-700 hover:text-brand-500 ${i18n.language === lang.code
                                ? 'text-brand-500 bg-brand-50/50 dark:bg-gray-700/50'
                                : 'text-gray-700 dark:text-gray-200'
                                }`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
