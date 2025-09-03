"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Перевірка мережевого з'єднання
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Логування помилки
    console.error("Global error caught:", error);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [error]);

  const handleReset = () => {
    reset();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Декоративні елементи */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-100/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

          <div className="text-center relative z-10 max-w-2xl mx-auto">
            {/* Іконка помилки */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Щось пішло не так
            </h1>

            {/* Повідомлення про мережу */}
            {!isOnline && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-6">
                <p>⚠️ Ви не в мережі. Перевірте інтернет-з&apos;єднання.</p>
              </div>
            )}

            {/* Основне повідомлення */}
            <p className="text-xl text-gray-600 mb-6">
              {isOnline
                ? "Сталася неочікувана помилка. Будь ласка, спробуйте ще раз."
                : "Перевірте ваше інтернет-з'єднання та спробуйте ще раз."}
            </p>

            {/* Кнопки дій */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleReset}
                className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Спробувати знову
              </button>

              <button
                onClick={handleGoHome}
                className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                На головну
              </button>

              <button
                onClick={handleReload}
                className="border border-orange-300 text-orange-700 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Перезавантажити
              </button>
            </div>

            {/* Додаткові опції */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={handleGoBack}
                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Назад
              </button>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-gray-600 hover:text-gray-800 transition-colors flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Деталі помилки
              </button>
            </div>

            {/* Деталі помилки */}
            {showDetails && (
              <div className="bg-gray-100 rounded-lg p-4 text-left mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Деталі помилки:
                </h3>
                <pre className="text-sm text-gray-700 overflow-auto max-h-40">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </div>
            )}

            {/* Контактна інформація */}
            <div className="border-t pt-6">
              <p className="text-gray-500 mb-2">Потребуєте допомоги?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@fuschteyy@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  📧 support@permanent.fush
                </a>
                <a
                  href="tel:+380958777107"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  📞 +38 (095) 877-71-07
                </a>
              </div>
            </div>
          </div>

          {/* Екран завантаження для перезавантаження */}
          <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center hidden">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Перезавантаження...</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
