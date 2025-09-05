"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export interface FooterProps {
  children?: React.ReactNode;
}
export default function Footer({ children }: FooterProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
      );
    }
  }, []);

  return (
      <footer
          ref={footerRef}
          className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative overflow-hidden"
      >
        {/* Декоративні елементи */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Основной контент футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Бренд и описание */}
            <div className="lg:col-span-1">
              <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                Fush
              </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Студія перманентного макіяжу, де створюється краса, що залишається
                з вами надовго.
              </p>
              <div className="flex space-x-4">
                <a
                    href="https://www.instagram.com/fush.if/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Instagram"
                >
                  <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Facebook"
                >
                  <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="YouTube"
                >
                  <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                    href="tel:+380979600057"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1 md:hidden"
                    aria-label="Телефон"
                >
                  <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Послуги */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-amber-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Послуги
              </h3>
              <ul className="space-y-3">
                {[
                  "Перманентний макіяж",
                  "Перманент губ",
                  " Видалення ремувером",
                  "Ламінування вій",
                  "Корекція",
                  "Навчання"
                ].map((service, index) => (
                    <li key={index}>
                      <a
                          href="#"
                          className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {service}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Контакти */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-amber-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Контакти
              </h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg
                      className="w-5 h-5 text-amber-400 mt-1 mr-3 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                  м. Івано-Франківськ,<br />вул. Загвіздянська, 6
                </span>
                </div>
                <div className="flex items-center group">
                  <svg
                      className="w-5 h-5 text-amber-400 mr-3 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                      href="tel:+380979600057"
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    +38 (097) 96-000-57
                  </a>
                </div>
              </div>
            </div>

            {/* Постачальник The Mineral */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Наш постачальник
              </h3>
              <div className="bg-gradient-to-br from-amber-900/30 to-rose-900/30 rounded-2xl p-4 border border-amber-700/30">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-white/10 rounded-xl">
                    <Image
                        src={"/images/the_mineral.jpg"}
                        width={120}
                        height={90}
                        className=" rounded-xl object-contain w-auto h-auto animate-pulse"
                        alt="The Mineral - постачальник пігментів"
                    />
                  </div>
                  <h4 className="text-amber-200 font-medium mb-1">The Mineral</h4>
                  <p className="text-gray-400 text-sm mb-2">Преміум пігменти для перманентного макіяжу</p>
                  <a
                      href="https://themineral.com.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 text-xs transition-colors duration-300 flex items-center"
                  >
                    <span>themineral.com.ua</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Нижня частина футера */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {currentYear}  Fush Всі права захищені.
              </p>
              <div className="flex space-x-6">
                <a
                    href="#"
                    className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Політика конфіденційності
                </a>
                <a
                    href="#"
                    className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Умови використання
                </a>
                <a
                    href="#"
                    className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Карта сайту
                </a>
              </div>
            </div>
          </div>
        </div>
        {children}
      </footer>
  );
}
