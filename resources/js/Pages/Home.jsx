import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Welcome" />

            <div className="max-w-4xl mx-auto py-5 px-6 text-gray-700">
                <h1 className="text-4xl font-semibold mb-10 tracking-tight">Task Management App</h1>

                <div className='flex w-full gap-4'>

                <section className="w-full mb-8 border border-neutral-300 bg-neutral-50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Back-End</h2>
                    <div className="text-base text-neutral-500 space-y-1">
                        <p>- Laravel 12</p>
                        <p>- MySQL</p>
                    </div>
                </section>

                <section className="w-full mb-8 border border-neutral-300 bg-neutral-50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Front-End</h2>
                    <div className="text-base text-neutral-500 space-y-1">
                        <p>- React</p>
                        <p>- Inertia.js</p>
                        <p>- Tailwind CSS</p>
                    </div>
                </section>

                </div>

                <section className="mb-8 border border-neutral-300 bg-neutral-50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">User Access</h2>
                    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
                        <li>Register and login as user</li>
                        <li>Access & manage only your tasks</li>
                        <li>Update your name, mail address & password</li>
                    </ul>
                </section>

                <div className='flex w-full gap-4'>

                <section className="w-full mb-8 border border-neutral-300 bg-neutral-50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Task Features</h2>
                    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
                        <li>Name</li>
                        <li>Description</li>
                        <li>Priority</li>
                        <li>Status</li>
                        <li>Due Date</li>
                        <li>Category</li>
                    </ul>
                </section>

                <section className="w-full mb-8 border border-neutral-300 bg-neutral-50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Category Fields</h2>
                    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
                        <li>Name</li>
                        <li>Color</li>
                    </ul>
                </section>

                </div>

                <div className='flex w-full gap-4'>

                <section className='w-full border border-neutral-300 bg-neutral-50 rounded-lg p-4'>
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Tasks Page</h2>
                    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
                        <li>Search tasks</li>
                        <li>Filter by status & priority</li>
                        <li>Sort by due date & creation date</li>
                        <li>Status updates</li>
                        <li>Pagination</li>
                    </ul>
                </section>

                <section className='w-full border border-neutral-300 bg-neutral-50 rounded-lg p-4'>
                    <h2 className="text-xl font-semibold mb-2 text-neutral-600">Category Tasks Page</h2>
                    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
                        <li>Filter by status & priority</li>
                        <li>Sort by due date & creation date</li>
                        <li>Pagination</li>
                    </ul>
                </section>

                </div>

            </div>
        </>
    );
}

Home.layout = (page) => <AppLayout children={page} />;
