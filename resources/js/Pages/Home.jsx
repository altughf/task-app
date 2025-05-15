import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Task App</h1>
            <p className="mt-4 text-lg text-gray-700">
                This is the public landing page accessible to everyone.
                You can navigate to the dashboard and other sections from here.
            </p>
        </div>
    );
}

Home.layout = (page) => <AppLayout children={page} />;
