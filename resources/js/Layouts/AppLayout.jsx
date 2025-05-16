import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropLinks from '@/Components/DropLinks';

export default function AppLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white border-b border-neutral-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
                    {/* LOGO */}
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="space-x-4 flex items-center">
                        {user ? (
                            <>
                                <Link href="/dashboard" className="font-semibold text-gray-700 hover:text-indigo-600 transition">
                                    Dashboard
                                </Link>

                                <DropLinks trigger={user.name}>
                                    <Link href={route('profile.edit')}>
                                        Profile
                                    </Link>
                                    <Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Link>
                                </DropLinks>
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

            <main className="flex-grow py-8 px-4">
                {children}
            </main>

            <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Task App
            </footer>
        </div>
    );
}
