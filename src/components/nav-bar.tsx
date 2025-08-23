


'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface NavBarProps {
    children?: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const iconRef = useRef<HTMLAnchorElement>(null);

    // Додаємо посилання до масиву
    const addToRefs = (el: HTMLLIElement | null, index: number) => {
        navItemsRef.current[index] = el;
    };

    useEffect(() => {
        // Анімація появи навігації
        const tl = gsap.timeline();

        tl.fromTo(logoRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        tl.fromTo(navItemsRef.current,
            { opacity: 0, y: -15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        );

        tl.fromTo(buttonRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
            "-=0.3"
        );

        tl.fromTo(iconRef.current,
            { opacity: 0, rotation: -90 },
            { opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.2"
        );

        // Анімація фону на скрол
        if (navbarRef.current) {
            gsap.to(navbarRef.current, {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(16px)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                duration: 0.5,
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: '+=100',
                    scrub: true,
                },
            });
        }
    }, []);

    // Анімація для мобільного меню
    useEffect(() => {
        if (isMenuOpen) {
            gsap.to('.mobile-menu', {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });

            gsap.to('.mobile-menu li', {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.2
            });

            gsap.to('.mobile-menu button', {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.4
            });
        } else {
            gsap.to('.mobile-menu', {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }, [isMenuOpen]);

    return (
        <div className="bg-transparent w-full  z-50" ref={navbarRef}>
            <div className="w-full max-w-[1200px] mx-auto bg-black/30 backdrop-blur-md mt-4 px-4 lg:px-8 border border-white/10 rounded-full transition-all duration-300">
                <div className="flex items-center justify-between h-16 md:h-20 mx-auto">
                    {/* Логотип */}
                    <a
                        ref={logoRef}
                        href="#"
                        className="relative text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-white bg-clip-text py-2 transition-all duration-300 hover:scale-105 group"
                    >
                        Permanent.
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></div>
                    </a>

                    {/* Десктопна навігація */}
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-6 lg:space-x-10">
                            {['Home', 'About', 'Services', 'Contacts'].map((item, index) => (
                                <li
                                    key={item}
                                    className="relative group"
                                    ref={el => addToRefs(el, index)}
                                >
                                    <a
                                        href="#"
                                        className="text-gray-200 text-lg font-medium transition-all duration-300 hover:text-white relative py-2"
                                    >
                                        {item}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Кнопка та мобільне меню */}
                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <button
                            ref={buttonRef}
                            className="hidden md:block relative bg-gradient-to-r from-gray-900 to-gray-800 text-white border border-gray-700 text-base font-medium px-6 lg:px-8 py-2 lg:py-2.5 rounded-full overflow-hidden hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-400 hover:text-black hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group"
                        >
                            <span className="relative z-10">Contact me</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                        </button>

                        {/* Instagram іконка */}
                        <a
                            ref={iconRef}
                            className="w-inline-block border border-white/30 rounded-full p-2.5 hover:bg-white hover:border-white transition-all duration-300 group"
                            href='https://www.instagram.com/fushtei_y/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/63d06fa3150c60feef4b9cb8/63d07b53f294b93eaad1e051_instagram-white.png"
                                loading="lazy"
                                width="24"
                                alt="Instagram"
                                className="group-hover:invert transition-all duration-300"
                            />
                        </a>

                        {/* Кнопка мобільного меню */}
                        <button
                            className="md:hidden flex flex-col justify-center w-8 h-8 space-y-1.5 group"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2 bg-amber-400' : 'group-hover:bg-amber-400'}`}></span>
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-0.5 bg-amber-400' : 'group-hover:bg-amber-400'}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобільне меню */}
            <div className={`mobile-menu fixed top-full left-0 w-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl border-b border-white/10 transition-all duration-300 md:hidden transform -translate-y-2 opacity-0`}>
                <div className="px-5 py-8">
                    <ul className="space-y-6 mb-8">
                        {['Home', 'About', 'Services', 'Contacts'].map((item) => (
                            <li key={item} className="opacity-0 transform translate-y-4">
                                <a
                                    href="#"
                                    className="block text-white text-2xl font-medium py-3 transition-all duration-300 hover:text-amber-400 pl-4 border-l-2 border-transparent hover:border-amber-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-lg font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform translate-y-4 opacity-0">
                        Contact me
                    </button>
                </div>
            </div>

            {children}
        </div>
    );
}