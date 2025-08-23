'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface ContactsProps {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    message?: string;
    children?: React.ReactNode;
}

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contacts({children}: ContactsProps) {
    const pageRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація всієї сторінки
            gsap.fromTo(pageRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            // Анімація форми
            gsap.fromTo(formRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація карти
            gsap.fromTo(mapRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Анімація контактної інформації
            gsap.fromTo(infoRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Тут буде логіка відправки форми
        console.log('Form submitted:', formData);
        alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
        setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            message: ''
        });
    };

    const services = [
        'Перманентний макіяж',
        'Мікроблейдинг брів',
        'Пудрові вії',
        'Ламінування брів',
        'Корекція',
        'Консультація'
    ];

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
            {/* Хедер сторінки */}
            <div className="container mx-auto px-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    <span className="text-amber-600">Контакти</span>
                </h1>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                    Зв'яжіться з нами для запису на консультацію або отримання додаткової інформації
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Форма зворотного зв'язку */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Напишіть нам</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ім'я *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Ваше ім'я"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Телефон *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                        placeholder="+38 (0__) ___ __ __"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Послуга
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="">Оберіть послугу</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Повідомлення
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Ваше повідомлення..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Надіслати повідомлення
                            </button>
                        </form>
                    </div>

                    {/* Карта та контакти */}
                    <div className="space-y-8">
                        {/* Карта */}
                        <div ref={mapRef} className="bg-white rounded-3xl p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ми знаходимось</h2>
                            <div className="aspect-video bg-gradient-to-br from-amber-100 to-rose-100 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600">м. Київ, вул. Хрещатик, 123</p>
                                    <p className="text-sm text-gray-500 mt-2">Натисніть для перегляду на Google Maps</p>
                                </div>
                            </div>
                        </div>

                        {/* Контактна інформація */}
                        <div ref={infoRef} className="bg-white rounded-3xl p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактна інформація</h2>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Телефон</p>
                                        <a href="tel:+380991234567" className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                                            +38 (099) 123-45-67
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Email</p>
                                        <a href="mailto:info@permanent.studio" className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                                            info@permanent.studio
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Години роботи</p>
                                        <p className="text-lg font-semibold text-gray-900">Пн-Пт: 10:00-20:00</p>
                                        <p className="text-lg font-semibold text-gray-900">Сб: 11:00-18:00</p>
                                        <p className="text-lg font-semibold text-gray-900">Нд: За записом</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Соціальні мережі */}
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Слідкуйте за нами</h2>
                    <p className="text-amber-100 mb-6">Приєднуйтесь до нашої спільноти в соціальних мережах</p>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.instagram.com/perm.fush/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                            <span className="text-2xl">📸</span>
                        </a>
                        <a
                            href="#"
                            className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                            <span className="text-2xl">📘</span>
                        </a>
                        <a
                            href="#"
                            className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                            <span className="text-2xl">📽️</span>
                        </a>
                        <a
                            href="#"
                            className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                            <span className="text-2xl">💬</span>
                        </a>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}