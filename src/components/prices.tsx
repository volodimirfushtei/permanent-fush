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
      title: "Перманентний макіяж брів",
      description:
        "Створення ефекту ніжного пудрового макіяжу брів, що надає їм ідеальну форму та густоту. Використовуються мінеральні пігменти The Mineral",
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
      title: "Перманентний макіяж губ",
      description:
        "Перманентний макіяж губ для яскравого контуру та природного відтінку.",
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
      title: "Перманентний макіяж повік",
      description:
        "Створення ефекту натуральних волосинок за технологією hair stroke.",
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
      icon: "✨",
      title: "Рефреш (оновлення)",
      description:
          "Оновлення існуючого перманентного макіяжу після 2.5 місяців.",
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
      title: "Видалення перманентного макіяжу ремувером",
      description:
          "Це безпечний спосіб позбутися небажаного або невдалого татуажу.",
      details: [
        "Сучасна методика",
        "Ефективне виведення пігменту",
        "Збереження здоров’я та цілісності шкіри",
        "Довготривалий результат",
      ],
      price: "700 ГРН",
      image: "/images/fush.jpg",
    },
    {
      icon: "🔄",
      title: "Корекція та фарбування брів",
      description: "Бажаний результат за 1 год.",
      details: [
        "Корекція воском/пінцетом",
        "Фарбування професійнмими фарбниками (Zola, Sculptor)",
        "Індивідуальний підхід",
      ],
      price: "400 ГРН",
      image: "/images/correction.jpg",
    },


    {
      icon: "💫",
      title: "Ламінування вій",
      description: "Косметична процедура, яка робить вії більш виразними.",
      details: ["Ламінування", "Фарбування", "Ботокс (зволоження)"],
      price: "600 грн",
      image: "/images/fush.jpg",
    },
    {
      icon: "💫",
      title: "Ламінування брів",
      description:
        "Косметична процедура, яка укладає та фіксує волоски у потрібному напрямкку.",
      details: ["Ламінування", "Ботокс (зволоження)"],
      price: "300грн",
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
        }
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
            }
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

        </div>

        {/* Сітка послуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={` relative bg-black/50 min-h-96 rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer group ${
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

              <p className="text-gray-400 min-h-12 mb-4 text-center">
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
                <span className="text-2xl absolute bottom-2 -translate-x-1/2 font-bold text-amber-300">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
