import React from 'react';
import { usePage, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show() {
    const { task } = usePage().props;

    const handleDelete = () => {
        if (confirm("Bu görevi silmek istediğinize emin misiniz?")) {
            router.delete(route('tasks.destroy', task.id));
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-900">{task.name}</h1>
            <p className="mt-2 text-lg text-gray-700">{task.description}</p>

            <div className="mt-6 flex items-center justify-between">
                <Link 
                    href={route('tasks.index')} 
                    className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                    Go Back
                </Link>
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200"
                >
                    Sil
                </button>
            </div>
        </div>
    );
}

Show.layout = (page) => <AppLayout children={page} />;
