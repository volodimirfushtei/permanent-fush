"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Award,
  BookOpen,
  Briefcase,
  MessageCircle,
  Clock,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrowsCoursePage() {
  const [activeTab, setActiveTab] = useState("program");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("premium");
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Floating elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Section animations
      gsap.utils.toArray<Element>(".animate-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Card animations
      gsap.utils.toArray<Element>(".animate-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const courseModules = [
    {
      icon: "📚",
      title: "Введення в перманентний макіяж",
      topics: [
        "Історія PM",
        "Обладнання та матеріали",
        "Гігієна та безпека",
        "Кольорознавство",
      ],
      duration: "4 години",
    },
    {
      icon: "🔍",
      title: "Анатомія та форма брів",
      topics: [
        "Анатомія обличчя",
        "Визначення ідеальної форми",
        "Робота з різними типами обличчя",
        "Розмітка брів",
      ],
      duration: "6 годин",
    },
    {
      icon: "🎨",
      title: "Техніки виконання",
      topics: [
        "Мікроблейдинг",
        "Пудрове затінення",
        "Гібридні техніки",
        "Корекція та перекриття",
      ],
      duration: "8 годин",
    },
    {
      icon: "💪",
      title: "Практика та відпрацювання",
      topics: [
        "Робота на тренажерах",
        "Практика на моделях",
        "Аналіз помилок",
        "Створення фото-портфоліо",
      ],
      duration: "12 годин",
    },
    {
      icon: "💼",
      title: "Бізнес-складова",
      topics: [
        "Юридичні аспекти",
        "Ціноутворення",
        "Маркетинг та просування",
        "Робота з клієнтами",
      ],
      duration: "4 години",
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Сертифікат",
      description: "Офіційний сертифікат міжнародного зразка",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Навчальні матеріали",
      description: "конспекти, відео-уроки, чек-листи",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Наставництво",
      description: "Персональний куратор 24/7",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Бізнес-підтримка",
      description: "Допомога у запуску власного бізнесу",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Спільнота",
      description: "Закрита група з випускниками",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Доступ назавжди",
      description: "Можливість повертатися до матеріалів",
    },
  ];

  const stats = [
    { number: 500, label: "Випускників", suffix: "+" },
    { number: 95, label: "Успішних стартів", suffix: "%" },
    { number: 12, label: "Місяців підтримки", suffix: "" },
    { number: 1000, label: "Годин практики", suffix: "+" },
  ];

  const packages = [
    {
      id: "standard",
      name: "Стандарт",
      price: "5 900 грн",
      features: [
        "Доступ до всіх уроків",
        "Навчальні матеріали",
        "Чат з куратором",
        "Сертифікат",
        "Відпрацювання на моделі",
      ],
      popular: false,
    },
    {
      id: "premium",
      name: "Преміум",
      price: "8 900 грн",
      features: [
        "Все зі Стандарту",
        "Персональні консультації",
        "Перевірка робіт",
        "Бізнес-консультації",
        "Доступ до спільноти",
      ],
      popular: true,
    },
    {
      id: "vip",
      name: "VIP",
      price: "14 900 грн",
      features: [
        "Все з Преміум",
        "Індивідуальні уроки",
        "Поміч у пошуку моделей",
        "Створення портфоліо",
        "Просування профілю",
      ],
      popular: false,
    },
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ваш JSX код залишається без змін */}
      </section>
    </div>
  );
}
