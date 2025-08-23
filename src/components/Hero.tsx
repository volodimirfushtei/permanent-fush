'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Реєструємо плагін ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
    children?: React.ReactNode;
}

const images = [
    {
        image: "/images/IMG_3683.JPEG",
        className: "w-72 h-52 md:w-80 md:h-60 lg:w-96 lg:h-72 absolute top-[45%] left-[15%] md:left-[30%] object-cover rounded-xl shadow-2xl z-20",
        animation: { x: -1000, rotation: -25, z: 100 }
    },
    {
        image: "/images/IMG_3668.JPEG",
        className: "w-74 h-48 md:w-92 md:h-56 lg:w-84 lg:h-64 absolute top-[25%] right-[15%] md:right-[20%] object-cover rounded-xl shadow-2xl z-20",
        animation: { x: 1000, rotation: 15, z: 100 }
    },
    {
        image: "/images/IMG_4577.PNG",
        className: "w-60 h-44 md:w-68 md:h-52 lg:w-80 lg:h-60 absolute bottom-[15%] left-[10%] md:left-[15%] object-cover rounded-xl shadow-2xl z-20",
        animation: { x: -800, rotation: -15, z: 100 }
    },
    {
        image: "/images/IMG_3666.JPEG",
        className: "w-56 h-40 md:w-64 md:h-48 lg:w-76 lg:h-56 absolute top-[10%] left-[30%] object-cover rounded-xl shadow-2xl z-20",
        animation: { x: 800, rotation: 10, z: 100 }
    }
];

function Hero({ children }: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    // Створюємо ref для кожної картинки
    const imageRef1 = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    const imageRef4 = useRef<HTMLImageElement>(null);

    const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4];

    useEffect(() => {
        setIsMounted(true);
    }, []);




    useEffect(() => {
        if (!heroRef.current) return;

        // Паралакс ефект
        gsap.to(heroRef.current, {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Частинки
        if (particlesRef.current) {
            const particles = gsap.utils.toArray(particlesRef.current.children); // ✅
            gsap.fromTo(
                particles,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );
        }

        // Текст
        gsap.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.8, ease: "elastic.out(1, 0.5)" }
        );

        // Підзаголовок
        gsap.fromTo(
            subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power3.out" }
        );

        // Кнопка
        gsap.fromTo(
            buttonRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "back.out(1.7)" }
        );

        // Анімація картинок при скролі
        imageRefs.forEach((imgRef, index) => {
            if (imgRef.current) {
                const anim = images[index].animation;
                gsap.to(imgRef.current, {
                    x: anim.x,
                    rotation: anim.rotation,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            }
        });

        // Поява картинок
        const imageElements = imageRefs
            .map(ref => ref.current)
            .filter(Boolean) as HTMLImageElement[];
        gsap.fromTo(
            imageElements,
            { opacity: 0, scale: 0.8, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "back.out(1.7)",
                delay: 0.8,
            }
        );

        // Плаваючі елементи
        if (heroRef.current) {
            heroRef.current
                .querySelectorAll(".floating-element")
                .forEach(el => {
                    gsap.to(el, {
                        y: 15,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])

    return (
        <div
            ref={heroRef}

            className="relative overflow-hidden h-screen w-full flex items-center justify-center"
        >
            {/* Фоновий градієнт */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>

            {/* Частинки */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden">

            </div>

            {/* Декоративні елементи */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl floating-element"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl floating-element"></div>

            {/* Головний контент */}
            <div className="relative z-30 text-center px-4 md:px-8 max-w-6xl mx-auto">
                <div ref={textRef} className="mb-6">
                    <h1 className='text-7xl md:text-8xl lg:text-9xl xl:text-[18rem] font-black text-transparent tracking-tighter uppercase bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text py-2'>
                        Fush
                    </h1>
                    <h2 className='text-5xl md:text-8xl lg:text-9xl xl:text-[4rem] font-black text-transparent uppercase bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text -mt-6 md:-mt-8 lg:-mt-10'>
                        Ф'юш
                    </h2>
                </div>



                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

            {/* Картинки з анімацією */}
            <img
                ref={imageRef1}
                src={images[0].image}
                alt="Creative design"
                className={`${images[0].className} floating-element`}
            />
            <img
                ref={imageRef2}
                src={images[1].image}
                alt="Innovative solutions"
                className={`${images[1].className} floating-element`}
            />
            <img
                ref={imageRef3}
                src={images[2].image}
                alt="Digital experience"
                className={`${images[2].className} floating-element`}
            />
            <img
                ref={imageRef4}
                src={images[3].image}
                alt="Creative process"
                className={`${images[3].className} floating-element`}
            />

            {/* Додаткові декоративні елементи */}
            <div className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-yellow-500/20 floating-element"></div>
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-amber-500/15 floating-element"></div>
            <div className="absolute top-1/2 left-10 w-8 h-8 rounded-full bg-yellow-400/25 floating-element"></div>

            {/* Індикатор скролу */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30">
                <span className="text-yellow-400/80 text-sm mb-2 animate-pulse">Прокрутіть вниз</span>
                <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-yellow-400/80 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>

            {children}
        </div>
    );
}

export default Hero;