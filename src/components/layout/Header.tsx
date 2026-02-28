import React, { useState, useEffect } from 'react';
import { Menu, X, EggFried } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '#home' },
        { name: 'المنتجات', href: '#products' },
        { name: 'خدامتنا', href: '#services' },
        { name: 'مراحل الإنتاج', href: '#production' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'للاتصال بنا', href: '#contact' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white group-hover:bg-brand-600 transition-colors">
                        <EggFried size={24} />
                    </div>
                    <span className={`font-bold text-xl md:text-2xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
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
                            className={`font-medium text-sm lg:text-base hover:text-brand-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-500 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
                }`}>
                <nav className="flex flex-col py-2 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="py-3 px-2 text-gray-800 font-medium border-b border-gray-50 last:border-0 hover:text-brand-600 hover:bg-brand-50 transition-colors rounded"
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
