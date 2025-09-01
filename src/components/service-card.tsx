"use client";

import React from "react";
import Link from "next/link";
import { Service } from "../../data/services";
import Image from "next/image";
interface ServiceCardProps {
    service: Service;
    index?: number;
    isExpanded: boolean; // Додайте цей пропс
    toggleDetails: () => void; // Додайте цей пропс
    addToRefs: (el: HTMLDivElement | null, index: number) => void;

}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (

            <div className="group bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-2">
                <Image
                    width={400}
                    height={300}
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <h2 className="text-xl font-semibold min-h-[4rem] break-words group-hover:text-amber-300 transition">
                    {service.title}
                </h2>
                <p className="text-gray-600 break-words line-clamp-3 mt-2">{service.description}</p>
                <div className="mt-4">
                    <Link
                        href={`/services/${service.slug}`}
                        className="text-amber-400 font-medium flex items-center hover:text-amber-300 transition-colors duration-300"
                    >
                        Детальніше
                        <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

    );
}
