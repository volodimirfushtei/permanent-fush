"use client";

import { useEffect } from "react";

export default function AdminError({
                                       error,
                                       reset,
                                   }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Admin error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Помилка в адмінці 🚨</h2>
            <p className="mb-6 text-yellow-700">Щось пішло не так тільки в адмін-панелі.</p>
            <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition"
            >
                Спробувати знову
            </button>
        </div>
    );
}