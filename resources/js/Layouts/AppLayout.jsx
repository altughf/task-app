import React from 'react';
import { Link } from '@inertiajs/react';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
                    {/* Logo (Homepage Link) */}
                    <Link href="/" className="text-3xl font-bold text-gray-900 hover:text-indigo-600 transition">
                        Task App
                    </Link>

                    {/* Navigation Links */}
                    <nav className="space-x-4">
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
