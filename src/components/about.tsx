"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef =  useRef<HTMLDivElement>(null!);
  const refs = {
    image:  useRef<HTMLDivElement>(null!),
    content:  useRef<HTMLDivElement>(null!),
    stats:  useRef<HTMLDivElement>(null!),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animations = [
        { el: refs.image.current, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
        { el: refs.content.current, from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
        { el: refs.stats.current, from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1 } },
      ];

      animations.forEach(({ el, from, to }) => {
        if (!el) return;
        gsap.fromTo(el, from, {
          ...to,
          duration: 1.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
          ref={sectionRef}
          id="about"
          className="min-h-screen py-20 md:py-28 bg-black/80 relative overflow-hidden"
      > {/* Декоративні елементи */}
        <div className="absolute top-10 left-50 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-5 right-80 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
        <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-400 mb-8">
          Про нас
        </h2>

        {/* Декор */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-50 -z-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-50 -z-20" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Зображення */}
          <div ref={refs.image} className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
                src="/images/IMG_3683.JPEG"
                alt="Permanent Studio - інтер'єр салону"
                className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Контент */}
          <div ref={refs.content} className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6">
              Наша <span className="text-amber-700">історія</span> та філософія
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              Permanent Fush — місце, де ми створюємо красу, що залишається з вами надовго.
              Наша місія — допомогти кожній жінці відчути себе впевненою та привабливою.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Ми використовуємо лише якісні пігменти та сучасне обладнання, щоб забезпечити
              безпечний і комфортний процес з ідеальним результатом.
            </p>

            {/* Список */}
            <div ref={refs.stats} className="space-y-4 mb-8">
              {[
                "Сертифіковані майстри з багаторічним досвідом",
                "Гіпоалергенні матеріали європейського виробництва",
                "Індивідуальний підхід до кожної клієнтки",
                "Стерильні умови та сучасне обладнання",
              ].map((text, i) => (
                  <div key={i} className="flex items-center text-gray-400">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                          className="w-4 h-4 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {text}
                  </div>
              ))}
            </div>

            {/* Кнопка */}
            <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Дізнатися більше про нас
            </button>
          </div>
        </div>
      </section>
  );
}


