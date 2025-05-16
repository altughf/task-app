import React from 'react';
import { Head } from '@inertiajs/react';
import { usePage, Link, router } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';

export default function Show() {
    const { category } = usePage().props;

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this category?")) {
            router.delete(route('categories.destroy', category.id));
        }
    };

    return (

        <>

        <Head title="Category" />

        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded">
            <h1 className="text-3xl font-semibold text-gray-900">{category.name}</h1>

            <div className="mt-6 space-y-2 text-gray-800 text-sm">
                <div className="flex items-center gap-2">
                    <strong>Color:</strong>
                    <span
                        className="w-4 h-4 inline-block rounded border"
                        style={{ backgroundColor: category.color }}
                    ></span>
                    <span className="font-mono">{category.color}</span>
                </div>
                <p><strong>Created At:</strong> {new Date(category.created_at).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(category.updated_at).toLocaleString()}</p>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <Link
                    href={route('categories.index')}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
                <div className="flex gap-2">
                    <Link
                        href={route('categories.edit', category.id)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>

        </>
    );
}

Show.layout = (page) => <DashLayout children={page} />;
