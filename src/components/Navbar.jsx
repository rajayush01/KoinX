import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using lucide-react icons instead of react-icons
import logo from '../assets/KoinX_Logo.png';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { title: "Crypto Tax", href: "#" },
        { title: "Free Tools", href: "#" },
        { title: "Resource Center", href: "#" }
    ];

    return (
        <nav className="relative w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img 
                            src={logo}
                            alt="KoinX Logo"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                            {link.title}
                        </a>
                    ))}
                    <div className="px-3 py-2">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;