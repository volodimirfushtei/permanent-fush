// src/app/services/[slug]/page.tsx
import { services } from "@/data/favors";
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

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
    const { slug } =  params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white mt-20">
            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Permanent-Fush
                </Link>
                <Link
                    href="/services"
                    className="px-4 py-2 rounded-full border border-gray-700 hover:border-amber-400 transition-colors duration-300"
                >
                    ← До послуг
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-80 md:h-screen/2 w-full overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
                    <div className="w-full max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight ">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">

                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                {/* Description Section */}
                <section className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700/50 mb-16 transition-all duration-500 hover:border-amber-400/30">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                        Детальний опис послуги
                    </h2>
                    <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8">
                            {service.description}
                        </p>
                        {service.details && (
                            <div className="whitespace-pre-line text-gray-400">
                                {service.details}
                            </div>
                        )}
                    </div>
                </section>

                {/* Duration & Details Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Duration Card */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:border-amber-400/30">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-amber-400"
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
                            <h3 className="text-2xl font-bold text-white">Тривалість</h3>
                        </div>
                        <p className="text-3xl font-bold text-amber-400 mb-2">
                            {service.duration}
                        </p>

                    </div>


                </section>

                {/* Additional Info */}
                <section className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-3xl p-8 md:p-10 mb-16 border border-amber-400/20">
                    <div className="flex items-start">
                        <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-amber-400"
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
                            <h3 className="text-xl font-bold text-white mb-4">Важлива інформація</h3>
                            <p className="text-amber-100">
                                ⚠️ Корекція виконується не раніше і не пізніше 2.5 місяців від первинної процедури.
                                Якщо пізніше 2.5 місяців — робиться рефреш.
                            </p>
                        </div>
                    </div>
                </section>



                {/* Back Button */}
                <section className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Повернутися до всіх послуг
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} BeautyStudio. Усі права захищені.
                    </p>
                </div>
            </footer>
        </div>
    );
}






