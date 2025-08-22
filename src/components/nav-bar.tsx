import React from 'react';




export interface NavBarProps {
    children: React.ReactNode;
    disabled?: boolean;
}

export default function NavBar({
                                        children,

                                    }: NavBarProps) {
    return (
        <div className="flex w-full h-34 bg-gray-900/60 backdrop-blur-lg justify-evenly items-center">
            <a href="#" className="font-bold text-5xl">Permanent.</a>
            <nav className="flex gap-5">
                <ul className="flex gap-5">
                    <li>
                        <a href="#" className="text-2xl">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl">Contacts</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl">Services</a>
                    </li>
                </ul>
            </nav>
            <button className="bg-black text-white text-3xl flex items-center justify-center px-8 py-4 rounded-full hover:bg-gray-100 hover:text-black transition-colors">Contact me</button>

            {children}
        </div>
    );
}