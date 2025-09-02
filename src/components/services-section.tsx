// src/components/services-section.tsx (your component with minor fixes)
"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./service-card";
import { Service } from "@/data/favors";

interface ServicesSectionProps {
  children?: React.ReactNode;
  services: Service[];
}

// Реєструємо плагін ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection({ children, services }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Ініціалізуємо масив посилань
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, services.length);
  }, [services.length]);

  // Додаємо посилання до масиву
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    // Анімація для заголовка
    if (titleRef.current) {
      gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
      );
    }

    // Анімація для карток
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
            card,
            { opacity: 0, y: 80, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
        );
      }
    });

    // Анімація для статистики
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target")!;
      const count = { value: 0 };

      gsap.to(count, {
        value: target,
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (counter.textContent !== null) {
            counter.textContent = Math.floor(count.value) + "+";
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [services]); // Додано services до залежностей

  const stats = [
    { number: 102, label: "Завершених робіт" },
    { number: 95, label: "Задоволених клієнтів" },
    { number: 2, label: "Років досвіду" },
    { number: 3, label: "Фахівців в команді" },
  ];

  return (
      <section
          ref={sectionRef}
          className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      >
        {/* Декоративні елементи */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Заголовок секції */}
          <div className="text-center mb-16 md:mb-24">
            <h2
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-white to-amber-300 bg-clip-text mb-6"
            >
              Наші послуги
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ми пропонуємо якісні послуги
            </p>
          </div>

          {/* Картки послуг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-28">
            {services.map((service: Service, index: number) => (
                <div
                    key={service.slug}
                    ref={el => addToRefs(el, index)}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <ServiceCard
                      service={service}
                      index={index}
                      isExpanded={expandedCard === index}
                  />
                </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 mb-2 counter"
                        data-target={stat.number}
                    >
                      0+
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* CTA блок */}
          <div className="text-center mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Готові до перетворень?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Зв'яжіться з нами сьогодні та отримайте безкоштовну консультацію
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Записатися на консультацію
              </button>
              <button className="border-2 border-gray-700 text-white font-semibold px-8 py-4 rounded-full hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300">
                Переглянути портфоліо
              </button>
            </div>
          </div>
        </div>
        {children}
      </section>
  );
}
