"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export interface NavBarProps {
  children?: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Зміна фону при скролі
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLAnchorElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const addToRefs = (el: HTMLLIElement | null, index: number) => {
    navItemsRef.current[index] = el;
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );

    tl.fromTo(
      navItemsRef.current,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4",
    );

    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
      "-=0.3",
    );

    tl.fromTo(
      iconRef.current,
      { opacity: 0, rotation: -180 },
      { opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2",
    );

    // Анімація зміни фону при скролі
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const progress = self.progress;
        if (navbarRef.current) {
          const bgOpacity = Math.min(0.95, progress * 2);
          const blurAmount = Math.min(20, progress * 40);
          navbarRef.current.style.backgroundColor = `rgba(0, 0, 0, ${bgOpacity})`;
          navbarRef.current.style.backdropFilter = `blur(${blurAmount}px)`;
        }
      },
    });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(".mobile-menu li", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.to(".mobile-menu button", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.4,
      });
    } else {
      gsap.to(mobileRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50  transition-all duration-500 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-gray-200"
            : "bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Логотип */}
            <Link ref={logoRef} href="/" className="relative group">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                FUSH
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></div>
            </Link>

            {/* Десктопна навігація */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Services", path: "/services" },
                  { label: "Contacts", path: "/contacts" },
                ].map((item, index) => (
                  <li
                    key={item.label}
                    className="relative group"
                    ref={(el) => addToRefs(el, index)}
                  >
                    <Link
                      href={item.path}
                      className="text-gray-200 text-sm font-medium transition-all duration-300 hover:text-white relative py-2 px-1"
                    >
                      {item.label}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-yellow-300/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Права частина */}
            <div className="flex items-center space-x-4">
              {/* Телефон */}
              <button
                ref={buttonRef}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-yellow-400/10 text-amber-300 text-sm font-medium px-4 py-2 rounded-full border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-400/40 hover:text-white transition-all duration-300 group"
              >
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span>+380979600057</span>
              </button>

              {/* Instagram */}
              <a
                ref={iconRef}
                className="p-2 bg-gradient-to-r from-amber-500/10 to-yellow-400/10 border border-amber-500/20 rounded-full hover:bg-amber-500/20 hover:border-amber-400/40 transition-all duration-300 group"
                href="https://www.instagram.com/fushtei_y/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="ig-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient)"
                    d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm9.5 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              </a>

              {/* Мобільне меню */}
              <button
                className="md:hidden flex flex-col justify-center w-10 h-10 space-y-1.5 group p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2 bg-white" : "group-hover:bg-white"}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-0.5 bg-white" : "group-hover:bg-white"}`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобільне меню */}
      <div
        ref={mobileRef}
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-black to-gray-900 backdrop-blur-2xl z-40 md:hidden opacity-0 transform -translate-y-10"
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          {/* Кнопка закриття */}

          {/* Навігація */}
          <nav className="mt-10">
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contacts", path: "/contacts" },
                { label: "Brows", path: "/brows" },
              ].map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.path}
                    className="text-2xl font-semibold text-white hover:text-amber-400 transition-colors duration-300 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакти в мобільному меню */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="space-y-4">
              <a
                href="tel:+380979600057"
                className="flex items-center text-amber-400 text-lg font-semibold"
              >
                <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </span>
                +380979600057
              </a>
              <a
                href="https://www.instagram.com/fushtei.pm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white text-lg opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </span>
                @fushtei_y
              </a>
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
