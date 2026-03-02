import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for active sections
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -60% 0px', // Adjusted to trigger when section is near top
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActiveSection(id);
                    // Update URL path without the hash
                    const newPath = id === 'home' ? '/' : `/${id}`;
                    window.history.replaceState(null, '', newPath);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id], div[id="home"]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: t('home'), href: '#home' },
        { name: t('products'), href: '#products' },
        { name: t('services'), href: '#services' },
        { name: t('gallery'), href: '#gallery' },
        { name: t('about'), href: '#about' },
        { name: t('contact'), href: '#contact' },
        { name: t('patronage_badge', 'Patronage'), href: '#patronage' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // Account for fixed header
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
                    <img src="/zaaim-logo.png" alt="Oeufs Zaime Logo" className="w-10 h-10 object-contain drop-shadow-md rounded-full bg-white/10 p-0.5" />
                    <span className="font-bold text-xl md:text-2xl transition-colors text-gray-900 dark:text-white drop-shadow-sm">
                        شركة بيــض الرحامنــة
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`font-medium text-sm lg:text-base transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-500 after:origin-right after:transition-transform drop-shadow-sm ${activeSection === link.href.substring(1)
                                ? 'text-brand-600 dark:text-brand-400 after:scale-x-100'
                                : 'text-gray-800 dark:text-gray-100 hover:text-brand-500 after:scale-x-0 hover:after:scale-x-100'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-600 pl-4 ml-2 transition-colors text-gray-800 dark:text-gray-200">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* Mobile Menu Button & Tools */}
                <div className="flex items-center gap-3 md:hidden transition-colors text-gray-800 dark:text-gray-200">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <button
                        className="p-2 rounded-lg transition-colors text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-100 dark:border-gray-800' : 'max-h-0'
                }`}>
                <nav className="flex flex-col py-2 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`py-3 px-2 font-medium border-b border-gray-50 dark:border-gray-800 last:border-0 transition-colors rounded ${activeSection === link.href.substring(1)
                                ? 'text-brand-600 bg-brand-50/50 dark:bg-brand-900/10'
                                : 'text-gray-800 dark:text-gray-200 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-gray-800'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
