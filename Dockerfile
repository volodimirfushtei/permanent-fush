# Етап збірки
FROM node:20-alpine AS builder

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності (включаючи devDependencies для Turbopack)
RUN npm ci

# Копіюємо всі файли проекту
COPY . .

# Створюємо production збірку з Turbopack
RUN npm run build

# Етап запуску
FROM node:20-alpine AS production

# Встановлюємо робочу директорію
WORKDIR /app

# Вказуємо production режим (виправлений формат)
ENV NODE_ENV=production

# Додаємо непривілейованого користувача для безпеки
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Копіюємо необхідні файли з етапу збірки
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Змінюємо власника робочої директорії
RUN chown -R nextjs:nodejs /app

# Перемикаємо на непривілейованого користувача
USER nextjs

# Відкриваємо порт
EXPOSE 3000

# Команда для запуску
CMD ["npm", "start"]