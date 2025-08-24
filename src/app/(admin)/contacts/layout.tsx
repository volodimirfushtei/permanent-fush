import { ReactNode } from 'react';
import NavBar from '@/components/nav-bar';


export default function Layout({
                                           children
                                       }: {
    children: ReactNode;
}) {
    return (
        <>
            <NavBar/>
            <main className="flex flex-col w-screen pt-20">
                {children}
            </main>
        </>
    );
}