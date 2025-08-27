// components/structured-data.tsx
export function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Permanent Fush',
        description: 'Опис вашого проекту',
        url: 'https://permanent-fush.vercel.app/',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}