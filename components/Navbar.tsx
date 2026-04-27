'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrollY(scrollTop);
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleNavClick = (href: string) => {
        scrollToSection(href);
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Introduction', href: '#introduction' },
        { name: 'Team', href: '#Team' },
        { name: 'Information', href: '#information' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
                    : 'bg-transparent'
            }`}
            style={{
                transform: `translateY(${Math.min(scrollY * 0.1, 0)}px)`,
                opacity: isScrolled ? 1 : 0.95
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                        <button 
                            className="transition-all duration-300 transform hover:scale-105"
                            onClick={() => scrollToSection('#top')}
                        >
                            <Image
                                src="/images/saduak_bluetext_bg_whiteLOGO-removebg-preview.png" 
                                alt="Saduak Logo" 
                                className="h-25 mt-2"
                                width="100"
                                height="100"
                            />
                        </button>
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                                        isScrolled 
                                            ? 'text-gray-800 hover:text-blue-600' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200" 
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    // X icon for close
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    // Hamburger icon for open
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isOpen 
                    ? 'max-h-96 opacity-100 visible' 
                    : 'max-h-0 opacity-0 invisible'
            }`}>
                <div className={`px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/50 ${
                    isScrolled ? 'shadow-lg' : ''
                }`}>
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                                isScrolled 
                                    ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-50' 
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Parallax background effect */}
            <div 
                className={`absolute inset-0 -z-10 transition-all duration-700 ${
                    isScrolled ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
                style={{
                    background: `linear-gradient(135deg, 
                        rgba(59, 130, 246, ${0.05 - scrollY * 0.0001}) 0%, 
                        rgba(147, 51, 234, ${0.05 - scrollY * 0.0001}) 100%)`,
                    transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`
                }}
            />
            
            {/* Additional parallax layer */}
            <div 
                className={`absolute inset-0 -z-20 transition-all duration-1000 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                    background: `radial-gradient(circle at 20% 50%, 
                        rgba(59, 130, 246, ${0.03 - scrollY * 0.00005}) 0%, 
                        transparent 50%)`,
                    transform: `translateY(${scrollY * 0.3}px)`
                }}
            />
        </nav>
    );
};

export default Navbar;

