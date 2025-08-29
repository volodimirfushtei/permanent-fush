import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://permanent-fush.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://permanent-fush.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://permanent-fush.vercel.app/contacts',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://permanent-fush.vercel.app/brows',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://permanent-fush.vercel.app/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Додайте всі ваші сторінки
    ]
}