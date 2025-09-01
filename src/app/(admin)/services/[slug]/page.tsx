// src/app/services/[slug]/page.tsx
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailsPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
    const { slug } =  params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <div className="font-sans bg-gray-50 w-screen min-h-screen text-gray-900">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        width={1920}
                        height={1080}
                        priority
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
                    <div className="w-full max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                            {service.title}
                        </h1>
                        <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
                {/* Description Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-amber-100 pb-2">
                            Опис послуги
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        {service.details && (
                            <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                                {service.details}
                            </div>
                        )}
                    </div>
                </section>

                {/* Duration Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-amber-100 pb-2">
                             Tривалість
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">




                            {/* Duration Card */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-amber-200">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-amber-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>

                                </div>
                                <p className="text-2xl font-bold text-gray-800 text-center">
                                    {service.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Info */}
                <section className="bg-amber-50 rounded-2xl p-6 md:p-8 mb-12">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-amber-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm md:text-base">
                                ⚠️ Корекція виконується не раніше і не пізніше 2.5 місяців від первинної процедури. Якщо пізніше 2.5 місяців — робиться рефреш.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Link
                        href="/services"
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Повернутися до послуг
                    </Link>
                </section>
            </main>
        </div>
    );
}








