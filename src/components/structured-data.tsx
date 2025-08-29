// components/structured-data.tsx

export function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'ГUSH',
        description: 'Салон перманентного макіяжу у Києві',
        url: 'https://permanent-fush.vercel.app',
        telephone: '+380-XX-XXX-XX-XX',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Київ',
            addressCountry: 'UA'
        },
        offers: {
            '@type': 'Offer',
            description: 'Пудрове напилення брів'
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}