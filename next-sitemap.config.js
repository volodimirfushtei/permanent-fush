/** @type {import('next-sitemap').IConfig} */
const services = [
  { slug: "powder-brows" },
  { slug: "lip-blush" },
  { slug: "lashline" },
  { slug: "brow-correction" },
  { slug: "lash-lamination" },
  { slug: "permanent-removal" },
];

module.exports = {
  siteUrl: "https://permanent-fush.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : config.lastmod,
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Додайте статичні маршрути
    const staticRoutes = ["/", "/about", "/services", "/contacts", "/brows"];

    staticRoutes.forEach((route) => {
      result.push({
        loc: route,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Додайте динамічні маршрути
    services.forEach((service) => {
      result.push({
        loc: `/services/${service.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
