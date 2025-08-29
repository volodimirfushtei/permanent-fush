"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Реєструємо плагін ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
  children?: React.ReactNode;
}

const images = [
  {
    image: "/images/mineral_pink.png",
    className:
      "w-72 h-52 md:w-60 md:h-50 lg:w-86 lg:h-72 absolute top-[55%] left-[48%] md:left-[70%] object-cover rounded-xl shadow-2xl z-20",
    animation: { x: -1000, rotation: -25, z: 100 },
  },
  {
    image: "/images/IMG_3668.JPEG",
    className:
      "w-74 h-48 md:w-92 md:h-56 lg:w-84 lg:h-64 absolute top-[8%] right-[15%] md:right-[20%] object-cover rounded-xl shadow-2xl z-20",
    animation: { x: 1000, rotation: 15, z: 100 },
  },
  {
    image: "/images/mineral_remover.png",
    className:
      "w-60 h-44 md:w-68 md:h-52 lg:w-90 lg:h-70 absolute bottom-[16%] left-[5%] md:left-[12%] object-cover rounded-xl shadow-2xl z-20",
    animation: { x: -800, rotation: -15, z: 100 },
  },
  {
    image: "/images/IMG_3666.JPEG",
    className:
      "w-56 h-40 md:w-64 md:h-48 lg:w-86 lg:h-66 absolute top-[8%] left-[25%] object-cover rounded-xl shadow-2xl z-20",
    animation: { x: 800, rotation: 10, z: 100 },
  },
];

function Hero({ children }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);


  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Паралакс ефект
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Частинки
      if (particlesRef.current) {
        const particles = particlesRef.current
          ? gsap.utils.toArray(particlesRef.current.children)
          : [];
        if (particles.length > 0) {
          gsap.fromTo(particles, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
        }
      }

      // Кнопка
      gsap.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "back.out(1.7)" },
      );
      gsap.fromTo(
        titleRef.current,
        // from values (початковий стан)
        {
          x: 0,
          opacity: 1,
        },
        // to values (кінцевий стан)
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );

      gsap.fromTo(
        subtitleRef.current,
        // from values (початковий стан)
        {
          x: 0,
          opacity: 1,
        },
        // to values (кінцевий стан)
        {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );



      // Плаваючі елементи
      if (heroRef.current) {
        heroRef.current.querySelectorAll(".floating-element").forEach((el) => {
          gsap.to(el, {
            y: 15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, heroRef);
    // Cleanup
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <div
      ref={heroRef}
      style={{
        backgroundImage: "url('/images/modern.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative overflow-hidden h-screen w-full flex items-center justify-center"
    >
      {/* Фоновий градієнт */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>

      {/* Частинки */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
      ></div>

      {/* Декоративні елементи */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl floating-element"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl floating-element"></div>

      {/* Головний контент */}
      <div className="relative z-30 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-6">
          <h1
            ref={titleRef}
            className="text-7xl md:text-8xl mb-6 lg:text-9xl xl:text-[16rem] font-black text-transparent tracking-tighter uppercase bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text py-2"
          >
            Fush
          </h1>

          <h2
            ref={subtitleRef}
            className="text-2xl md:text-4xl  lg:text-9xl xl:text-[4rem] font-black text-transparent uppercase bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text -mt-6 md:-mt-8 lg:-mt-10"
          >
            Ф'юш
          </h2>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
          <button
            ref={buttonRef}
            className="group relative bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10">Зпис на консультацію</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative border-2 border-yellow-500/30 text-yellow-400 font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/10">
            <span className="relative z-10">Переглянути роботи</span>
          </button>
        </div>
      </div>

      {/* Додаткові декоративні елементи */}
      <div className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-yellow-500/20 floating-element"></div>
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-amber-500/15 floating-element"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 rounded-full bg-yellow-400/25 floating-element"></div>

      {/* Індикатор скролу */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-200 text-xl mb-2 animate-bounce">
          Scroll Down
        </span>
      </div>

      {children}
    </div>
  );
}

export default Hero;
