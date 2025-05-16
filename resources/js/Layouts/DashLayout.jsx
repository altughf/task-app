import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropLinks from '@/Components/DropLinks';

export default function DashLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex w-full min-h-screen'>
            <div className={`dash-left flex flex-col min-h-screen h-full border-r border-neutral-300 ${isSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'}`}>
                {/* LOGO */}
                <Link className='flex items-center justify-center border-b border-neutral-300 h-20' href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </Link>

                <nav className='flex flex-col divide-y border-b border-neutral-300 divide-neutral-200'>
                    <Link href="/tasks" className="py-4 pl-4 pr-4 bg-neutral-50 text-lg text-neutral-500 hover:text-indigo-600 transition">
                        Tasks
                    </Link>
                    <Link href="/tasks/create" className="py-4 pl-4 pr-4 bg-neutral-50 text-lg text-neutral-500 hover:text-indigo-600 transition">
                        New Task
                    </Link>
                    <Link href="/categories" className="py-4 pl-4 pr-4 bg-neutral-50 text-lg text-neutral-500 hover:text-indigo-600 transition">
                        Categories
                    </Link>
                    <Link href="/categories/create" className="py-4 pl-4 pr-4 bg-neutral-50 text-lg text-neutral-500 hover:text-indigo-600 transition">
                        New Category
                    </Link>
                </nav>
            </div>

            <div className="flex flex-col w-full bg-gray-100">
                <header className="h-20 border-b border-neutral-300 bg-white">
                    <div className="max-w-7xl mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
                        <button 
                            onClick={toggleSidebar}
                            className="dash-buton p-2 rounded-md text-gray-500 border hover:text-gray-600 hover:bg-gray-100 transition"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <nav className="space-x-4 flex items-center">
                            <DropLinks trigger={user.name}>
                                <Link href={route('profile.edit')}>
                                    Profile
                                </Link>
                                <Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Link>
                            </DropLinks>
                        </nav>
                    </div>
                </header>

                <main className="py-8 h-screen px-4">
                    {children}
                </main>

                <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Task App
                </footer>
            </div>
        </div>
    );
}
