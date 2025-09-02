/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://permanent-fush.vercel.app', // твій сайт
    generateRobotsTxt: true, // створює robots.txt автоматично
    sitemapSize: 5000, // кількість URL на одну карту
    changefreq: 'daily', // рекомендована частота оновлення
    priority: 0.7, // пріоритет сторінок
};
