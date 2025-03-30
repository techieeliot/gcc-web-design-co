'use client'

import { useState, useEffect } from "react";
import { Link } from "./ui/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-950 z-50 transition-all duration-300 ease-in-out shadow-lg">
            <header className="container mx-auto px-4">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    {/* Logo Section - Further reduced width on tablet */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="no-underline">
                            <div className="flex items-center gap-1 md:gap-2 lg:gap-6">
                                <h1 className="text-base sm:text-lg md:text-lg lg:text-2xl font-bold text-gray-300 leading-none whitespace-nowrap">
                                    dev<span className="text-blue-700">South</span>
                                    <span className="hidden sm:inline md:hidden lg:inline"> Consulting</span>
                                </h1>
                                {/* Tagline - desktop only */}
                                <span className="hidden lg:inline text-gray-400 text-xs lg:text-sm mt-1">
                                    React ecosystem web development
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav - Optimized for tablet */}
                    <nav className="hidden md:flex h-full">
                        <ul className="flex items-center gap-1 md:gap-1 lg:gap-2 xl:gap-6">
                            <li>
                                <Link 
                                    href="/" 
                                    className={`px-1.5 md:px-2 lg:px-2 xl:px-3 py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors ${
                                        pathname === '/' 
                                            ? 'bg-gray-700 text-gray-200' 
                                            : 'text-gray-400 hover:text-gray-200 active:text-gray-100'
                                    }`}
                                >
                                    Welcome
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className={`px-1.5 md:px-2 lg:px-2 xl:px-3 py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors ${
                                        pathname === '/about' 
                                            ? 'bg-gray-700 text-gray-200' 
                                            : 'text-gray-400 hover:text-gray-200 active:text-gray-100'
                                    }`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/services" 
                                    className={`px-1.5 md:px-2 lg:px-2 xl:px-3 py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors ${
                                        pathname === '/services' 
                                            ? 'bg-gray-700 text-gray-200' 
                                            : 'text-gray-400 hover:text-gray-200 active:text-gray-100'
                                    }`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/portfolio" 
                                    className={`px-1.5 md:px-2 lg:px-2 xl:px-3 py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors ${
                                        pathname === '/portfolio' 
                                            ? 'bg-gray-700 text-gray-200' 
                                            : 'text-gray-400 hover:text-gray-200 active:text-gray-100'
                                    }`}
                                >
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className={`px-1.5 md:px-2 lg:px-2 xl:px-3 py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors ${
                                        pathname === '/contact' 
                                            ? 'bg-gray-700 text-gray-200' 
                                            : 'text-gray-400 hover:text-gray-200 active:text-gray-100'
                                    }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-gray-200"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Nav Drawer */}
                    <div className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'visible' : 'invisible'}`}>
                        {/* Backdrop */}
                        <div 
                            className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity ${
                                isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Drawer */}
                        <nav className={`fixed right-0 top-0 bottom-0 w-64 bg-gray-950 p-6 shadow-xl transition-transform duration-300 ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                            <ul className="space-y-4">
                                <li><Link href="/" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200 active:text-gray-100 transition-colors">Welcome</Link></li>
                                <li><Link href="/about" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200 active:text-gray-100 transition-colors">About</Link></li>
                                <li><Link href="/services" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200 active:text-gray-100 transition-colors">Services</Link></li>
                                <li><Link href="/portfolio" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200 active:text-gray-100 transition-colors">Our Work</Link></li>
                                <li><Link href="/contact" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200 active:text-gray-100 transition-colors">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}