"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface PricesProps {
  children?: React.ReactNode;
  icon?: string;
  title?: string;
  description?: string;
  details?: string[];
  price?: string;
  image?: string;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Prices({ children }: PricesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "✏️",
      title: "Брови пудрова техніка",
      description: "Створення ефекту ніжного пудрового макіяжу брів, що надає їм ідеальну форму та густоту.",
      details: [
        "Первинна процедура: 2500 ГРН",
        "Корекція: 1700 ГРН",
        "Рефреш (оновлення): 2000 ГРН",
        "Корекція через 1-2.5 місяці",
      ],
      price: "2500 ГРН",
      image: "/images/powder-brows.jpg",
    },
    {
      icon: "👄",
      title: "Губи",
      description: "Перманентний макіяж губ для яскравого контуру та природного відтінку.",
      details: [
        "Первинна процедура: 2500 ГРН",
        "Корекція: 1700 ГРН",
        "Рефреш (оновлення): 2000 ГРН",
        "Корекція через 1-2.5 місяці",
      ],
      price: "2500 ГРН",
      image: "/images/lips.jpg",
    },
    {
      icon: "👁️",
      title: "Мікшейдинг",
      description: "Створення ефекту натуральних волосинок за технологією hair stroke.",
      details: [
        "Первинна процедура: 1800 ГРН",
        "Корекція: 900 ГРН",
        "Корекція через 1-2.5 місяці",
        "Пізніше 2.5 місяців - рефреш",
      ],
      price: "1800 ГРН",
      image: "/images/microshading.jpg",
    },
    {
      icon: "🔄",
      title: "Корекція",
      description: "Професійна корекція існуючого перманентного макіяжу.",
      details: [
        "Виконується через 1-2.5 місяці",
        "Пізніше 2.5 місяців - рефреш",
        "Індивідуальний підхід",
        "Відновлення кольору та форми",
      ],
      price: "від 900 ГРН",
      image: "/images/correction.jpg",
    },
    {
      icon: "✨",
      title: "Рефреш (оновлення)",
      description: "Оновлення існуючого перманентного макіяжу після 2.5 місяців.",
      details: [
        "Для брів: 2000 ГРН",
        "Для губ: 2000 ГРН",
        "Поновлення кольору",
        "Корекція форми",
      ],
      price: "2000 ГРН",
      image: "/images/refresh.jpg",
    },
    {
      icon: "💫",
      title: "FUSH технологія",
      description: "Інноваційна технологія перманентного макіяжу для природного результату.",
      details: [
        "Сучасна методика",
        "Натуральний вигляд",
        "Європейські пігменти",
        "Довготривалий результат",
      ],
      price: "індивідуально",
      image: "/images/fush.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Анімація заголовка
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Анімація карток
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // Анімація для активної картки
      if (cardsRef.current[activeService]) {
        gsap.to(cardsRef.current[activeService], {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeService]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Декоративні елементи */}
      <div className="absolute top-50 left-50 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-5 right-80 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секції */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-300 mb-4"
          >
            Ціни на <span className="text-amber-500">послуги</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Професійні послуги перманентного макіяжу від досвідчених майстрів з
            використанням якісних матеріалів
          </p>
        </div>

        {/* Сітка послуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-black/50 rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer group ${
                activeService === index
                  ? "border-amber-600 shadow-xl scale-105"
                  : "border-gray-700 hover:border-amber-200 hover:shadow-xl"
              }`}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-300 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4 text-center">
                {service.description}
              </p>

              <div className="mb-4">
                {service.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center text-shadow-sm text-gray-300 mb-2"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {detail}
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <span className="text-2xl font-bold text-amber-300">
                  {service.price}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-semibold py-3 rounded-lg mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Детальніше
              </button>
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
