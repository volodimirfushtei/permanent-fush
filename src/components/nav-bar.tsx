

'use client';

import React, { useState } from 'react';

export interface NavBarProps {
    children?: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative w-full z-50 ">
            <div className="bg-transparent backdrop-blur-xl  b px-4 lg:px-16">
                <div className="flex items-center justify-between h-36 max-w-7xl mx-auto">
                    {/* Логотип */}
                    <a
                        href="#"
                        className="relative text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-gray-300 bg-clip-text py-2 transition-all duration-300 hover:scale-105"
                    >
                        Permanent.
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                    </a>

                    {/* Десктопна навігація */}
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-6 lg:space-x-8">
                            {['Home', 'About', 'Services', 'Contacts'].map((item) => (
                                <li key={item} className="relative group">
                                    <a
                                        href="#"
                                        className="text-gray-200 text-xl lg:text-lg font-medium transition-colors duration-300 hover:text-white"
                                    >
                                        {item}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white transition-all duration-300 group-hover:w-full"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Кнопка та мобільне меню */}
                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <button className="hidden md:block relative bg-gradient-to-r from-black-800 to-gray-600 text-white border-2 border-gray-400 text-base lg:text-lg font-semibold px-6 lg:px-8 py-2 lg:py-3 rounded-full overflow-hidden hover:bg-gray-50 hover:text-black transition-all duration-300">
                            Contact me
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 hover:translate-x-full"></div>
                        </button>

                        {/* Кнопка мобільного меню */}
                        <button
                            className="md:hidden flex flex-col justify-center w-8 h-8 space-y-1.5"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобільне меню */}
            <div className={`fixed top-20 left-0 w-full bg-black bg-opacity-95 backdrop-blur-xl border-b border-white border-opacity-10 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="px-5 py-6">
                    <ul className="space-y-5 mb-8">
                        {['Home', 'About', 'Services', 'Contacts'].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="block text-white text-xl font-medium py-3 transition-colors duration-300 hover:text-indigo-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full cursor-pointer bg-gradient-to-r from-black-600 to-gray-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:bg-gray-50 hover:text-black transition-all duration-300">
                        Contact me
                    </button>
                </div>
            </div>

            {children}
        </div>
    );
}