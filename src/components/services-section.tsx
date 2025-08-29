// components/ServicesSection.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./service-card";

export interface ServicesSectionProps {
  children?: React.ReactNode;
}

// Реєструємо плагін ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection({ children }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Додаємо посилання до масиву
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  const toggleDetails = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    // Анімація для заголовка
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
                end: "bottom 20%",
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
          counter.textContent = Math.floor(count.value) + "+";
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      image: "/images/IMG_4578.PNG",
      title: "Пудрове напилення брів",
      description: "Сучасні мінеральні пігменти",
      details: "Створення ефекту натуральних густих брів за допомогою техніки пудрового напилення. Використовуємо якісні пігменти європейського виробництва. Тривалість процедури: 2-3 години. Термін служби: 1-2 роки."
    },
    {
      image: "/images/IMG_4578.PNG",
      title: "Пудрове напилення губ",
      description: "Ідеальний загоєний результат",
      details: "Насичений колір губ з ефектом ombre. Ідеально підходить для корекції форми губ. Використовуємо гіпоалергенні пігменти. Тривалість: 2-3 години. Результат: 1-3 роки."
    },
    {
      image: "/images/per_lashline.jpg",
      title: "Макіяж міжвійкового простору",
      description: "Створення ефекту густих вій",
      details: "Підкреслення контуру очей, створення ефекту густих вій без щоденного макіяжу. Безпечна процедура для навіть найчутливіших очей. Тривалість: 1-1.5 години."
    },
    {
      image: "/images/remover.jpg",
      title: "Видалення перманентного макіяжу",
      description: "Видалення ремувером",
      details: "Професійне видалення неякісного або старого перманентного макіяжу. Використовуємо сучасні ремувери. Безболісна процедура. Кількість сеансів: 1-3."
    },
    {
      image: "/images/lips.jpg",
      title: "Корекція та фарбування брів",
      description: "Якісні матеріали, корекція воском та пінцетом",
      details: "Повний комплекс догляду за бровами: корекція форми, фарбування хною або фарбою, укладка. Використовуємо тільки професійні матеріали."
    },
    {
      image: "/images/IMG_4578.PNG",
      title: "Ламінування вій",
      description: "Ламінування, фарбування та ботокс",
      details: "Комплексний догляд за віями: ламінування для підкручування, фарбування для насиченого кольору, ботокс для живлення. Результат: 4-6 тижнів."
    }
  ];

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
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    service={service}
                    index={index}
                    isExpanded={expandedCard === index}
                    onToggle={toggleDetails}
                    addToRefs={addToRefs}
                />
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
