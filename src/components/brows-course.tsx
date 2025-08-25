'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BrowsCoursePage() {
    const [activeTab, setActiveTab] = useState('program');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pageRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const courseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація героя
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                }
            );

            // Анімація секцій
            gsap.utils.toArray('.course-section').forEach((section: any) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Анімація карток
            gsap.utils.toArray('.course-card').forEach((card: any, index) => {
                gsap.fromTo(card,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    const courseModules = [
        {
            title: "Введення в перманентний макіяж",
            topics: ["Історія PM", "Обладнання та матеріали", "Гігієна та безпека", "Кольорознавство"]
        },
        {
            title: "Анатомія та форма брів",
            topics: ["Анатомія обличчя", "Визначення ідеальної форми", "Робота з різними типами обличчя", "Розмітка брів"]
        },
        {
            title: "Техніки виконання",
            topics: ["Мікроблейдинг", "Пудрове затінення", "Гібридні техніки", "Корекція та перекриття"]
        },
        {
            title: "Практика та відпрацювання",
            topics: ["Робота на тренажерах", "Практика на моделях", "Аналіз помилок", "Створення фото-портфоліо"]
        },
        {
            title: "Бізнес-складова",
            topics: ["Юридичні аспекти", "Ціноутворення", "Маркетинг та просування", "Робота з клієнтами"]
        }
    ];

    const benefits = [
        { icon: "🎓", title: "Сертифікат", description: "Офіційний сертифікат про завершення курсу" },
        { icon: "📚", title: "Навчальні матеріали", description: "Доступ до всіх навчальних матеріалів назавжди" },
        { icon: "👩‍🏫", title: "Наставництво", description: "Персональний куратор протягом всього навчання" },
        { icon: "💼", title: "Бізнес-підтримка", description: "Допомога у запуску власної справи" },
        { icon: "📱", title: "Онлайн-спільнота", description: "Доступ до закритої спільноти випускників" },
        { icon: "🔄", title: "Доступ назавжди", description: "Можливість перегляду уроків у будь-який час" }
    ];

    const reviews = [
        { name: "Анна", text: "Пройшла курс місяць тому, вже маю стабільних клієнтів. Якісні матеріали та підтримка куратора!" },
        { name: "Ірина", text: "Навчалась у інших, але тут найкращий підхід. Все зрозуміло та доступно, навіть для новачків." },
        { name: "Оксана", text: "Після курсу відкрила свій кабінет. Дякую за бізнес-консультації та підтримку!" }
    ];

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative py-20 md:py-28 bg-gradient-to-r from-amber-500 to-rose-500 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Онлайн-курс <span className="text-amber-200">Перманентний макіяж брів</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-amber-100">
                            Навчіться професійній техніці від основ до просунутих методів. Станьте затребуваним спеціалістом з перших занять.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-white text-amber-600 font-bold px-8 py-4 rounded-full hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Записатися на курс
                            </button>
                            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-amber-600 transition-all duration-300">
                                Детальніше про курс
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section ref={courseRef} className="py-20 course-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Чому наш курс найефективніший?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Комплексна програма, яка поєднує теоретичні знання з практичними навичками
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="course-card bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Program */}
            <section className="py-20 bg-amber-50 course-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Програма навчання
                        </h2>
                        <p className="text-xl text-gray-600">5 модулів, які перетворять вас на професіонала</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-4 mb-8 justify-center">
                            {['program', 'format', 'reviews'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-amber-500 text-white'
                                            : 'bg-white text-gray-700 hover:bg-amber-100'
                                    }`}
                                >
                                    {tab === 'program' && 'Програма'}
                                    {tab === 'format' && 'Формат'}
                                    {tab === 'reviews' && 'Відгуки'}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'program' && (
                            <div className="space-y-6">
                                {courseModules.map((module, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h3 className="text-xl font-semibold text-amber-600 mb-4">
                                            Модуль {index + 1}: {module.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {module.topics.map((topic, i) => (
                                                <li key={i} className="flex items-center text-gray-700">
                                                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'format' && (
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Формат навчання</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-amber-600 mb-4">Онлайн-частина</h4>
                                        <ul className="space-y-3">
                                            <li>📹 20+ відео-уроків</li>
                                            <li>📚 Конспекти та матеріали</li>
                                            <li>💬 Закритий чат з куратором</li>
                                            <li>🔄 Доступ назавжди</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-amber-600 mb-4">Практика</h4>
                                        <ul className="space-y-3">
                                            <li>👩‍💻 Практичні завдання</li>
                                            <li>📸 Перевірка робіт куратором</li>
                                            <li>🎯 Робота на тренажерах</li>
                                            <li>💪 Практика на моделях</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                                <span className="text-amber-600 font-semibold">{review.name[0]}</span>
                                            </div>
                                            <h4 className="text-lg font-semibold">{review.name}</h4>
                                        </div>
                                        <p className="text-gray-700 italic">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 course-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Вартість навчання
                        </h2>
                        <p className="text-xl text-gray-600">Оберіть оптимальний пакет навчання</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="course-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Стандарт</h3>
                            <div className="text-4xl font-bold text-amber-600 mb-6">5 900 грн</div>
                            <ul className="space-y-3 mb-8">
                                <li>Доступ до всіх уроків</li>
                                <li>Навчальні матеріали</li>
                                <li>Чат з куратором</li>
                                <li>Сертифікат</li>
                            </ul>
                            <button className="w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                                Обрати тариф
                            </button>
                        </div>

                        <div className="course-card bg-amber-500 p-8 rounded-2xl shadow-xl border border-amber-400 text-center relative transform scale-105">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Популярний
                </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Преміум</h3>
                            <div className="text-4xl font-bold text-white mb-6">8 900 грн</div>
                            <ul className="space-y-3 mb-8 text-amber-100">
                                <li>Все зі Стандарту</li>
                                <li>Персональні консультації</li>
                                <li>Перевірка домашніх завдань</li>
                                <li>Бізнес-консультації</li>
                                <li>Доступ до спільноти</li>
                            </ul>
                            <button className="w-full bg-white text-amber-600 font-semibold py-3 rounded-lg hover:bg-amber-100 transition-colors">
                                Обрати тариф
                            </button>
                        </div>

                        <div className="course-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">VIP</h3>
                            <div className="text-4xl font-bold text-amber-600 mb-6">14 900 грн</div>
                            <ul className="space-y-3 mb-8">
                                <li>Все з Преміум</li>
                                <li>Індивідуальні уроки</li>
                                <li>Поміч у пошуку моделей</li>
                                <li>Створення портфоліо</li>
                                <li>Просування вашого профілю</li>
                            </ul>
                            <button className="w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                                Обрати тариф
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-amber-500 to-rose-500 text-white course-section">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Готові розпочати кар'єру у перманентному макіяжі?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Приєднуйтесь до 500+ випускників, які вже працюють у сфері краси та заробляють на улюбленій справі
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-amber-600 font-bold px-8 py-4 rounded-full hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Записатися на курс
                    </button>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Заявка на курс
                        </h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Ваше ім'я"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                            <input
                                type="tel"
                                placeholder="Телефон"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition-colors"
                            >
                                Відправити заявку
                            </button>
                        </form>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            Наш менеджер зв'яжеться з вами протягом 15 хвилин
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}