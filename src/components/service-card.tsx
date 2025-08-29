// components/ServiceCard.tsx
"use client";

import React, { useRef } from "react";

import Image from "next/image";

interface ServiceCardProps {
    service: {
        image: string;
        title: string;
        description: string;
        details: string;
    };
    index: number;
    isExpanded: boolean;
    onToggle: (index: number) => void;
    addToRefs: (el: HTMLDivElement | null, index: number) => void;
}

export default function ServiceCard({
                                        service,
                                        index,
                                        isExpanded,
                                        onToggle,
                                        addToRefs
                                    }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={(el) => {
                cardRef.current = el;
                addToRefs(el, index);
            }}
            className="group bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-2"
        >
            <div className="relative w-full h-48 sm:h-64 mb-4">
                <Image
                    fill
                    loading="lazy"
                    src={service.image}
                    alt={service.title}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover cursor-pointer rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
            </h3>

            <p className="text-gray-400 mb-4">
                {service.description}
            </p>

            {/* Детальний опис */}
            {isExpanded && (
                <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                    <p className="text-gray-300 text-sm">
                        {service.details}
                    </p>
                </div>
            )}

            <div className="mt-4">
                <button
                    onClick={() => onToggle(index)}
                    className="relative z-10 text-amber-400 font-medium flex items-center hover:text-amber-300 transition-colors duration-300 cursor-pointer"
                >
                    {isExpanded ? "Згорнути" : "Детальніше"}
                    <svg
                        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
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
                </button>
            </div>
        </div>
    );
}