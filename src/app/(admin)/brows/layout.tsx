"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <NavBar />
            <main key={pathname} className="flex flex-col w-screen">
                {children}
            </main>
        </>
    );
}