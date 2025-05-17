import React from 'react';
import { Head } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ categories }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            destroy(route('categories.destroy', id));
        }
    };

    return (

        <>

        <Head title="Category List" />

        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Category List</h1>

            <ul className="space-y-4">
                {categories.map((category) => (
                    <li
                        key={category.id}
                        className="p-4 border border-gray-200 bg-white rounded"
                    >
                        <h2 className="text-lg font-semibold">{category.name}</h2>

                        <div className="flex items-center gap-2 text-gray-600">
                            <span>Color:</span>
                            <span
                                className="w-4 h-4 inline-block rounded border"
                                style={{ backgroundColor: category.color }}
                            ></span>
                            <span className="font-mono">{category.color}</span>
                        </div>

                        <p className="text-gray-600">Created: {new Date(category.created_at).toLocaleString()}</p>
                        <p className="text-gray-600">Updated: {new Date(category.updated_at).toLocaleString()}</p>

                        <div className="mt-4 flex gap-2">
                            <Link
                                href={route('categories.show', category.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Open
                            </Link>
                            <Link
                                href={route('categories.edit', category.id)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(category.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        </>
    );
}

Index.layout = (page) => <DashLayout children={page} />;
