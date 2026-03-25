"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

import { Send, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

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
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
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
        { y: 50, opacity: 0 },
        {y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Анімація форми
      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,

        }
      );

      // Анімація карти
      gsap.fromTo(
        mapRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,

        }
      );

      // Анімація контактної інформації
      gsap.fromTo(
        infoRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,

        }
      );

      // Анімація куль (орбів)
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(orb2Ref.current, {
        y: 40,
        x: -20,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-[#111] to-black pt-24 pb-16 relative overflow-hidden"
    >
      {/* Декоративні елементи */}
      <div ref={orb1Ref} className="absolute top-40 right-10 md:right-40 w-72 h-72 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div ref={orb2Ref} className="absolute bottom-10 left-10 md:left-40 w-96 h-96 bg-gradient-to-tr from-yellow-500 to-amber-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Хедер сторінки */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 drop-shadow-sm">
            Контакти
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto font-light leading-relaxed">
          Зв&apos;яжіться з нами для запису на консультацію або отримання
          додаткової інформації
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          {/* Форма зворотного зв'язку */}
          <div className="lg:col-span-7 bg-gray-800/30 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-gray-700/50 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
              Напишіть нам
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2 ml-1"
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
                    className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 text-white placeholder-gray-500 outline-none"
                    placeholder="Ваше ім'я"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-2 ml-1"
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
                    className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 text-white placeholder-gray-500 outline-none"
                    placeholder="+38 (0__) ___ __ __"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 text-white placeholder-gray-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-400 mb-2 ml-1"
                >
                  Послуга
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 text-white outline-none appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1.25rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                >
                  <option value="" className="bg-gray-900 text-gray-400">Оберіть послугу</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-gray-900 text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2 ml-1"
                >
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 text-white placeholder-gray-500 outline-none resize-none"
                  placeholder="Ваше повідомлення..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-3 mt-4"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white relative z-10"></div>
                    <span className="relative z-10">Відправка...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 text-lg">Надіслати повідомлення</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Карта та контакти */}
          <div className="lg:col-span-5 space-y-6 flex flex-col h-full">
            
            <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
               {/* Phone */}
               <div className="group bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 border border-gray-700/40 shadow-xl hover:bg-gray-800/50 hover:border-amber-500/30 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1 font-medium">Телефон</h3>
                    <a href="tel:+380991234567" className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors block tracking-wide">+38 (099) 123-45-67</a>
                  </div>
               </div>
               
               {/* Email */}
               <div className="group bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 border border-gray-700/40 shadow-xl hover:bg-gray-800/50 hover:border-amber-500/30 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1 font-medium">Email</h3>
                    <a href="mailto:info@permanent-fush.ua" className="text-base font-bold text-white group-hover:text-amber-400 transition-colors block">info@permanent-fush.ua</a>
                  </div>
               </div>

               {/* Address */}
               <div className="group bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 border border-gray-700/40 shadow-xl hover:bg-gray-800/50 hover:border-amber-500/30 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col sm:col-span-2 lg:col-span-1">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mt-1">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-400 mb-1 font-medium">Адреса</h3>
                      <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-relaxed">м. Івано-Франківськ,<br/>вул. Загвіздянська, 6</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="group bg-gray-800/30 backdrop-blur-md rounded-2xl p-4 border border-gray-700/40 shadow-xl hover:bg-gray-800/50 hover:border-pink-500/30 hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-pink-500/20 transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-white text-sm font-semibold group-hover:text-pink-400 transition-colors">Instagram</span>
              </a>
              <a href="#" className="group bg-gray-800/30 backdrop-blur-md rounded-2xl p-4 border border-gray-700/40 shadow-xl hover:bg-gray-800/50 hover:border-blue-500/30 hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Facebook className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors">TikTok</span>
              </a>
            </div>

            {/* Карта */}
            <div
              ref={mapRef}
              className="bg-gray-800/30 backdrop-blur-md rounded-[2rem] overflow-hidden border border-gray-700/40 shadow-xl flex-grow min-h-[250px] relative group"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/20 rounded-[2rem] transition-colors duration-500 z-10 pointer-events-none"></div>
              <div className="h-full w-full opacity-85 group-hover:opacity-100 transition-opacity duration-500">
                <Map />
              </div>
            </div>

          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
