'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export interface AboutSectionProps {
    children?: React.ReactNode;
}

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection({children}:AboutSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація зображення
            gsap.fromTo(imageRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація контенту
            gsap.fromTo(contentRef.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація статистики
            gsap.fromTo(statsRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація чисел
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target')!;
                const count = { value: 0 };

                gsap.to(count, {
                    value: target,
                    duration: 2,
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    onUpdate: () => {
                        counter.textContent = Math.floor(count.value).toString();
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Декоративні елементи */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Зображення */}
                    <div ref={imageRef} className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/IMG_3683.JPEG"
                                alt="Permanent Studio - інтер'єр салону"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Декорativні елементи на зображенні */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400 rounded-2xl rotate-12 z-10 shadow-xl"></div>
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-400 rounded-2xl -rotate-12 z-10 shadow-xl"></div>

                        {/* Experience badge */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="text-3xl font-bold text-amber-600">
                                <span className="count" data-target="8">0</span>+
                            </div>
                            <div className="text-sm text-gray-600">Років досвіду</div>
                        </div>
                    </div>

                    {/* Контент */}
                    <div ref={contentRef} className="lg:pl-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Наша <span className="text-amber-600">історія</span> та философія
                        </h2>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Permanent Studio - це місце, де ми створюємо красу, що залишається з вами надовго.
                            Наша місія - допомогти кожній жінці відчути себе впевненою та привабливою.
                        </p>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Ми використовуємо лише найякісніші пігменти та сучасне обладнання,
                            щоб забезпечити безпечний та комфортний процес з ідеальним результатом.
                        </p>

                        {/* Особливості */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-800">Сертифіковані майстри з багаторічним досвідом</span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-800">Гіпоалергенні матеріали європейського виробництва</span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-800">Індивідуальний підхід до кожної клієнтки</span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-800">Стерильні умови та сучасне обладнання</span>
                            </div>
                        </div>

                        {/* Кнопка */}
                        <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            Дізнатися більше про нас
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
}