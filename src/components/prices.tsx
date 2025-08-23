'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export interface PricesProps  {
    children?: React.ReactNode;
    icon?: string;
    title?: string;
    description?: string;
    details?: string[];
    price?: string;
    image?: string;
}


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Prices({children}:PricesProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: '✏️',
            title: 'Перманентний макіяж',
            description: 'Сучасні техніки перманентного макіяжу з використанням якісних пігментів європейського виробництва. Довготривалий результат та натуральний вигляд.',
            details: [
                'Тривалість: 2-3 години',
                'Знеболення: крем-анестетик',
                'Результат: 1-3 роки',
                'Корекція: через 4-6 тижнів'
            ],
            price: 'від 3000 грн',
            image: '/images/permanent-makeup.jpg'
        },
        {
            icon: '👁️',
            title: 'Мікроблейдинг брів',
            description: 'Створення ефекту натуральних волосинок за технологією hair stroke. Ідеальна форма та густота брів, що підкреслює вашу природну красу.',
            details: [
                'Тривалість: 2-2.5 години',
                'Знеболення: крем-анестетик',
                'Результат: 1-2 роки',
                'Корекція: через 4-8 тижнів'
            ],
            price: 'від 2500 грн',
            image: '/images/microblading.jpg'
        },
        {
            icon: ' Powder',
            title: 'Пудрові вії',
            description: 'Ніжний ефект make-up, що надає очам виразності. Ідеальне рішення для тих, хто хоче підкреслити природну красу без щоденного макіяжу.',
            details: [
                'Тривалість: 2-3 години',
                'Знеболення: крем-анестетик',
                'Результат: 1-2 роки',
                'Корекція: через 4-6 тижнів'
            ],
            price: 'від 3500 грн',
            image: '/images/powder-brows.jpg'
        },
        {
            icon: ' Lami',
            title: 'Ламінування брів',
            description: 'Процедура оформлення та фіксації брів, що надає їм ідеальну форму, обєм та доглянутий вигляд. Ефект протягом 6-8 тижнів.',
            details: [
                'Тривалість: 45-60 хвилин',
                'Результат: 6-8 тижнів',
                'Догляд: спеціальний серум',
                'Без знеболення'
            ],
            price: 'від 800 грн',
            image: '/images/laminating.jpg'
        },
        {
            icon: ' Color',
            title: 'Корекція та підкрашування',
            description: 'Професійна корекція існуючого перманентного макіяжу, оновлення кольору та форми. Повернення яскравості та чіткості.',
            details: [
                'Тривалість: 1.5-2 години',
                'Знеболення: крем-анестетик',
                'Періодичність: 1-2 роки',
                'Відновлення кольору'
            ],
            price: 'від 2000 грн',
            image: '/images/correction.jpg'
        },
        {
            icon: ' Consult',
            title: 'Консультація та догляд',
            description: 'Професійна консультація щодо догляду після процедур, підбору форми та кольору. Індивідуальний підхід до кожної клієнтки.',
            details: [
                'Тривалість: 30-45 хвилин',
                'Безкоштовна консультація',
                'Індивідуальний підхід',
                'Рекомендації догляду'
            ],
            price: 'безкоштовно',
            image: '/images/consultation.jpg'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація заголовка
            gsap.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація карток
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        { y: 80, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            delay: index * 0.1,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 90%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }
            });

            // Анімація для активної картки
            if (cardsRef.current[activeService]) {
                gsap.to(cardsRef.current[activeService], {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [activeService]);

    return (
        <section ref={sectionRef} id="services" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Декоративні елементи */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Заголовок секції */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Наші <span className="text-amber-600">послуги</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Професійні послуги перманентного макіяжу від досвідчених майстрів з використанням якісних матеріалів
                    </p>
                </div>

                {/* Сітка послуг */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}

                            className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer group ${
                                activeService === index
                                    ? 'border-amber-400 shadow-xl scale-105'
                                    : 'border-white hover:border-amber-200 hover:shadow-xl'
                            }`}
                            onClick={() => setActiveService(index)}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-4 text-center">
                                {service.description}
                            </p>

                            <div className="mb-4">
                                {service.details.map((detail, i) => (
                                    <div key={i} className="flex items-center text-sm text-gray-500 mb-2">
                                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                        {detail}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-4">
                                <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                            </div>

                            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-lg mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Детальніше
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA блок */}
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Готові до перетворення?
                    </h3>
                    <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                        Запишіться на безкоштовну консультацію та отримайте індивідуальні рекомендації
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-amber-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                            Записатися онлайн
                        </button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-amber-600 transition-all duration-300">
                            Зателефонувати
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}