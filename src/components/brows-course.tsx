"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  Users,
  Award,
  BookOpen,
  Briefcase,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  ChevronRight,
  X
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
      gsap.fromTo(".hero-content",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Floating elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Section animations
      gsap.utils.toArray(".animate-section").forEach((section: any) => {
        gsap.fromTo(section,
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
      gsap.utils.toArray(".animate-card").forEach((card: any, index) => {
        gsap.fromTo(card,
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
      topics: ["Історія PM", "Обладнання та матеріали", "Гігієна та безпека", "Кольорознавство"],
      duration: "4 години"
    },
    {
      icon: "🔍",
      title: "Анатомія та форма брів",
      topics: ["Анатомія обличчя", "Визначення ідеальної форми", "Робота з різними типами обличчя", "Розмітка брів"],
      duration: "6 годин"
    },
    {
      icon: "🎨",
      title: "Техніки виконання",
      topics: ["Мікроблейдинг", "Пудрове затінення", "Гібридні техніки", "Корекція та перекриття"],
      duration: "8 годин"
    },
    {
      icon: "💪",
      title: "Практика та відпрацювання",
      topics: ["Робота на тренажерах", "Практика на моделях", "Аналіз помилок", "Створення фото-портфоліо"],
      duration: "12 годин"
    },
    {
      icon: "💼",
      title: "Бізнес-складова",
      topics: ["Юридичні аспекти", "Ціноутворення", "Маркетинг та просування", "Робота з клієнтами"],
      duration: "4 години"
    }
  ];

  const benefits = [
    { icon: <Award className="w-8 h-8" />, title: "Сертифікат", description: "Офіційний сертифікат міжнародного зразка" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Навчальні матеріали", description: "конспекти, відео-уроки, чек-листи" },
    { icon: <Users className="w-8 h-8" />, title: "Наставництво", description: "Персональний куратор 24/7" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Бізнес-підтримка", description: "Допомога у запуску власного бізнесу" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Спільнота", description: "Закрита група з випускниками" },
    { icon: <Clock className="w-8 h-8" />, title: "Доступ назавжди", description: "Можливість повертатися до матеріалів" }
  ];

  const stats = [
    { number: 500, label: "Випускників", suffix: "+" },
    { number: 95, label: "Успішних стартів", suffix: "%" },
    { number: 12, label: "Місяців підтримки", suffix: "" },
    { number: 1000, label: "Годин практики", suffix: "+" }
  ];



  const packages = [
    {
      id: "standard",
      name: "Стандарт",
      price: "5 900 грн",
      features: ["Доступ до всіх уроків", "Навчальні матеріали", "Чат з куратором", "Сертифікат","Відпрацювання на моделі"],
      popular: false
    },
    {
      id: "premium",
      name: "Преміум",
      price: "8 900 грн",
      features: ["Все зі Стандарту", "Персональні консультації", "Перевірка робіт", "Бізнес-консультації", "Доступ до спільноти"],
      popular: true
    },
    {
      id: "vip",
      name: "VIP",
      price: "14 900 грн",
      features: ["Все з Преміум", "Індивідуальні уроки", "Поміч у пошуку моделей", "Створення портфоліо", "Просування профілю"],
      popular: false
    }
  ];

  return (
      <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-rose-500/20"></div>
          <div className="absolute top-10 right-10 floating-element">
            <div className="w-20 h-20 bg-amber-200 rounded-full opacity-30"></div>
          </div>
          <div className="absolute bottom-20 left-10 floating-element">
            <div className="w-16 h-16 bg-rose-300 rounded-full opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="hero-content text-center max-w-4xl mx-auto">
              <div className="mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                🎓 Професійний онлайн-курс
              </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Перманентний макіяж{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                брів
              </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Навчіться професійній техніці від основ до просунутих методів.
                Станьте затребуваним спеціалістом з перших занять.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Почати навчання
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-600 transition-all duration-300 flex items-center">
                  <span>Дивитися програму</span>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
            <div className="animate-bounce">
              <ChevronRight className="w-6 h-6 text-gray-400 transform rotate-90" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 animate-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Чому обирають наш курс?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Комплексний підхід, який гарантує ваш успіх у сфері перманентного макіяжу
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                  <div key={index} className="animate-card bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-amber-600 mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section className="py-20 bg-white animate-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Програма навчання
              </h2>
              <p className="text-xl text-gray-600">
                5 модулів, які перетворять вас на професіонала
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {["program", "format", "reviews"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                            activeTab === tab
                                ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      {tab === "program" && <BookOpen className="w-5 h-5 mr-2" />}
                      {tab === "format" && <Play className="w-5 h-5 mr-2" />}
                      {tab === "reviews" && <Star className="w-5 h-5 mr-2" />}
                      {tab === "program" && "Програма"}
                      {tab === "format" && "Формат"}
                      {tab === "reviews" && "Відгуки"}
                    </button>
                ))}
              </div>

              {activeTab === "program" && (
                  <div className="space-y-6">
                    {courseModules.map((module, index) => (
                        <div key={index} className="animate-card bg-gradient-to-r from-amber-50 to-rose-50 p-8 rounded-2xl shadow-lg border border-amber-100">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                              <span className="text-2xl mr-4">{module.icon}</span>
                              <h3 className="text-2xl font-semibold text-gray-900">
                                Модуль {index + 1}: {module.title}
                              </h3>
                            </div>
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        {module.duration}
                      </span>
                          </div>

                          <ul className="space-y-3">
                            {module.topics.map((topic, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                    ))}
                  </div>
              )}


            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 animate-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Оберіть свій пакет
              </h2>
              <p className="text-xl text-gray-600">
                Інвестиція в ваше майбутнє, яка окупиться вже за місяць
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                  <div
                      key={pkg.id}
                      className={`animate-card relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                          pkg.popular
                              ? "border-amber-300 bg-white shadow-2xl scale-105"
                              : "border-gray-200 bg-white"
                      }`}
                  >
                    {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Популярний
                    </span>
                        </div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {pkg.name}
                    </h3>

                    <div className="text-4xl font-bold text-amber-600 mb-6 text-center">
                      {pkg.price}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                      ))}
                    </ul>

                    <button
                        onClick={() => {
                          setSelectedPackage(pkg.id);
                          setIsModalOpen(true);
                        }}
                        className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                            pkg.popular
                                ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:shadow-lg hover:shadow-amber-500/30"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      Обрати пакет
                    </button>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-rose-600 text-white animate-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Готові розпочати кар'єру мрії?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Приєднуйтесь до 500+ випускників, які вже працюють у сфері краси та
              заробляють на улюбленій справі
            </p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-amber-600 font-bold px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              🎯 Почати навчання зараз
            </button>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-modal">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Заявка на курс
                  </h3>
                  <p className="text-gray-600">
                    Залиште контакти і ми зв'яжемося з вами протягом 15 хвилин
                  </p>
                </div>

                <form className="space-y-4">
                  <input
                      type="text"
                      placeholder="Ваше ім'я"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />

                  <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    📩 Відправити заявку
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                </p>
              </div>
            </div>
        )}
      </div>
  );
}
