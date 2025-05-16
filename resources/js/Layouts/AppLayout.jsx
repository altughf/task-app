import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function AppLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
                    {/* LOGO */}
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="space-x-4 flex items-center">
                        {user ? (
                            <>
                                <Link href="/tasks" className="text-gray-700 hover:text-indigo-600 transition">
                                    Tasks
                                </Link>
                                <Link href="/tasks/create" className="text-gray-700 hover:text-indigo-600 transition">
                                    New Task
                                </Link>
                                <Link href="/categories" className="text-gray-700 hover:text-indigo-600 transition">
                                    Categories
                                </Link>
                                <Link href="/categories/create" className="text-gray-700 hover:text-indigo-600 transition">
                                    New Category
                                </Link>

                                {/* Dropdown kaldırıldı, linkler direkt eklendi */}
                                <Link href={route('dashboard')} className="text-gray-700 hover:text-indigo-600 transition ms-4">
                                    Dashboard
                                </Link>
                                <Link href={route('profile.edit')} className="text-gray-700 hover:text-indigo-600 transition">
                                    Profile
                                </Link>
                                <Link href={route('logout')} method="post" as="button" className="text-gray-700 hover:text-indigo-600 transition">
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-gray-700 hover:text-indigo-600 transition">
                                    Login
                                </Link>
                                <Link href={route('register')} className="text-gray-700 hover:text-indigo-600 transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            <main className="py-8 px-4">
                {children}
            </main>

            <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Task App
            </footer>
        </div>
    );
}
