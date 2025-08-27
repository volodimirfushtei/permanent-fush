// components/TestErrorBoundary.tsx
"use client";

import React, { useState } from "react";

// Компонент, який кидає помилку
const BuggyComponent = () => {
  throw new Error("Це тестова помилка!");
  return <div>Цей контент ніколи не покажеться</div>;
};

// Компонент з кнопкою, яка кидає помилку
const ErrorButton = () => {
  const [hasError, setHasError] = useState(false);

  const triggerError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error("Помилка викликана кнопкою!");
  }

  return (
    <button
      onClick={triggerError}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      Викликати помилку
    </button>
  );
};

// Компонент для тестування
const TestErrorBoundary = () => {
  const [showBuggyComponent, setShowBuggyComponent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-900 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Тестування Error Boundary
      </h1>

      <div className="bg-black/80 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          1. Компонент з помилкою при монтуванні
        </h2>
        <button
          onClick={() => setShowBuggyComponent(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
          disabled={showBuggyComponent}
        >
          {showBuggyComponent
            ? "Компонент вже показано"
            : "Показати компонент з помилкою"}
        </button>

        {showBuggyComponent && (
          <div className="border border-red-300 rounded p-4 mt-4">
            <BuggyComponent />
          </div>
        )}
      </div>

      <div className="bg-black/80 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          2. Компонент з помилкою при кліку
        </h2>
        <div className="border border-green-300 rounded p-4">
          <ErrorButton />
        </div>
      </div>

      <div className="bg-black/80 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          3. Інструкції з тестування
        </h2>
        <div className="space-y-3">
          <p className="flex items-start">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
              1
            </span>
            Натисніть "Показати компонент з помилкою" - ErrorBoundary має
            показати fallback UI
          </p>
          <p className="flex items-start">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
              2
            </span>
            Натисніть "Викликати помилку" - ErrorBoundary має показати fallback
            UI
          </p>
          <p className="flex items-start">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
              3
            </span>
            У обох випадках натисніть "Спробувати знову" для скидання стану
          </p>
          <p className="flex items-start">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
              4
            </span>
            Перевірте консоль браузера для перегляду залогованих помилок
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Ця сторінка призначена лише для тестування. У продакшені
              використовуйте ErrorBoundary для обгортання компонентів, які
              можуть викликати помилки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestErrorBoundary;
