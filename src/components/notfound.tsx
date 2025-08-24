'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './notfound.module.css';
export interface NotFoundProps {
    children?: React.ReactNode;
}

export default function NotFoundPage({children}:NotFoundProps) {
    const pageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація входу
            gsap.fromTo(containerRef.current,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)"
                }
            );

            // Анімація цифр 404
            gsap.fromTo(numberRef.current,
                { y: -100, opacity: 0, rotation: -10 },
                {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.2,
                    delay: 0.3,
                    ease: "back.out(1.7)"
                }
            );

            // Анімація тексту
            gsap.fromTo(textRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power2.out"
                }
            );

            // Анімація кнопки
            gsap.fromTo(buttonRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.9,
                    ease: "back.out(1.7)"
                }
            );

            // Додаткові декоративні анімації
            gsap.to('.floating-element', {
                y: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-black-750 via-black to-yellow-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Декоративні елементи */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-amber-200 rounded-full opacity-30 floating-element"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-30 floating-element"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-300 rounded-full opacity-20 floating-element"></div>
            <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-rose-300 rounded-full opacity-20 floating-element"></div>

            <div ref={containerRef} className="text-center relative z-10 max-w-2xl mx-auto">
                {/* Анімований номер 404 */}
                <div ref={numberRef} className="mb-8">
          <span className="text-9xl md:text-[12rem] font-bold text-amber-600 opacity-90">
            4
          </span>
                    <span className="text-9xl md:text-[12rem] font-bold text-rose-500 opacity-90 mx-2">
            0
          </span>
                    <span className="text-9xl md:text-[12rem] font-bold text-amber-600 opacity-90">
            4
          </span>
                </div>

                {/* Текст */}
                <div ref={textRef} className="mb-12">
                    <h1 className={`text-3xl md:text-4xl font-bold text-gray-500 mb-4 ${styles.glow_text}`}>
                        Ой! Сторінку не знайдено
                    </h1>
                    <p className="text-xl text-gray-600 mb-6 max-w-md mx-auto">
                        Схоже, що сторінка, яку ви шукаєте, переїхала або тимчасово недоступна.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mb-6 rounded-full"></div>

                </div>

                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        ref={buttonRef}
                        href="/"
                        className="group relative bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                        <span className="relative z-10">На головну</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    <button
                        onClick={handleGoBack}
                        className="group border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:border-amber-400 hover:text-amber-600"
                    >
                        <span className="relative z-10">Назад</span>
                    </button>

                    <Link
                        href="/contacts"
                        className="group text-gray-700 font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:text-rose-600 flex items-center"
                    >
                        <span className="relative z-10">Контакти</span>
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Додаткові посилання */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <Link href="/services" className={`text-gray-500 hover:text-amber-600 transition-colors ${styles.gradient_border}`}>
                        Послуги
                    </Link>
                    <Link href="/about" className={`text-gray-500 hover:text-amber-600 transition-colors ${styles.gradient_border}`}>
                        Про нас
                    </Link>
                    <Link href="/gallery" className={`text-gray-500 hover:text-amber-600 transition-colors ${styles.gradient_border}`}>
                        Галерея
                    </Link>
                    <Link href="/pricing" className={`text-gray-500 hover:text-amber-600 transition-colors ${styles.gradient_border}`}>
                        Ціни
                    </Link>
                </div>
            </div>


            {children}
        </div>
    );
}