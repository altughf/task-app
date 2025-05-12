import React from 'react';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Task App</h1>
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
