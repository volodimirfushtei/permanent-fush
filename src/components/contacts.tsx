"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

import { Send } from "lucide-react";

const Map = dynamic(() => import("./map"), {
  ssr: false,
});

export interface ContactsProps {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  children?: React.ReactNode;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contacts({ children }: ContactsProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Анімація всієї сторінки
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Анімація форми
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Анімація карти
      gsap.fromTo(
        mapRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Анімація контактної інформації
      gsap.fromTo(
        infoRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Симуляція відправки форми
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);

      // Тут буде реальна логіка відправки на сервер
      alert("Дякуємо за заявку! Ми зв'яжемося з вами найближчим часом.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Помилка при відправці форми:", error);
      alert("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Перманентний макіяж",
    "Мікроблейдинг брів",
    "Пудрові вії",
    "Ламінування брів",
    "Корекція",
    "Консультація",
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-24 pb-16 relative overflow-hidden"
    >
      {/* Декоративні елементи */}
      <div className="absolute top-40 right-100 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-5 left-80 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-30"></div>

      {/* Хедер сторінки */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Контакти
          </span>
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
          Зв&apos;яжіться з нами для запису на консультацію або отримання
          додаткової інформації
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Форма зворотного зв'язку */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Напишіть нам
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-3"
                  >
                    Ім&apos;я *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="Ваше ім'я"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-3"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="+38 (0__) ___ __ __"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-400 mb-3"
                >
                  Послуга
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white"
                >
                  <option value="">Оберіть послугу</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-3"
                >
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900/60 border border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Ваше повідомлення..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Відправка...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Надіслати повідомлення
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Карта та контакти */}
          <div className="space-y-8">
            {/* Карта */}
            <div className="space-y-6">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-3">Адреса</h2>
                <p className="text-gray-400">
                  м. Івано-Франківськ, вул. Загвіздянська, 6
                </p>
              </div>

              <div
                ref={mapRef}
                className="bg-gray-800/40 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700/50 shadow-xl h-90"
              >
                <Map />
              </div>
            </div>

            {/* Контактна інформація */}
            <div
              ref={infoRef}
              className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Контактна інформація
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-500"
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
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Телефон</p>
                    <a
                      href="tel:+380979600057"
                      className="text-xl font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      +38 (099) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
