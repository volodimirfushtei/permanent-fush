# Permanent Fush

Next.js 15 застосунок з використанням Turbopack для прискореної розробки.

## 🚀 Швидкий старт

### Передумови

- Node.js 18+
- npm

### Опис

````bash

Встановлення

```bash
npm install

Продакшен

```bash
npm run build
npm start

🤝 Розробка

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run dev

Застосунок буде доступний за адресою http://localhost:3000

 Доступні скрипти

    npm run dev - запуск режиму розробки з Turbopack
    npm run build - збірка для продакшену з Turbopack
    npm run start - запуск продакшен сервера
    npm run lint - перевірка коду ESLint
    npm run lint:fix - автоматичне виправлення помилок ESLint
    npm run format - форматування коду Prettier
    npm run format:check - перевірка форматування коду

🛠 Технології

    Next.js 15.5.0 - React фреймворк
    React 19.1.0 - бібліотека UI
    Turbopack - швидкий бандлер для розробки

Додаткові бібліотеки

    react-leaflet - робота з Leaflet maps
    framer-motion - анімації
    gsap - анімаційна бібліотека
    clsx - умовні  CSS класи

Інструменти розробки

    TypeScript - типізація JavaScript
    Tailwind CSS 4 - CSS фреймворк
    ESLint - лінтинг коду
    Prettier - форматування коду

🐳 Docker розгортання

```bash
docker build -t permanent-fush .
docker run -p 3000:3000 permanent-fush
docker run -d -p 3000:3000 --name permanent-fush-app permanent-fush

📁 Структура проекту

permanent-fush/
├── public/          # Статичні файли
├── src/             # Вихідний код
├── .next/           # Збірка Next.js
├── node_modules/    # Залежності
├── package.json     # Залежності та скрипти
├── Dockerfile       # Конфігурація Docker
└── README.md        # Документація
````
