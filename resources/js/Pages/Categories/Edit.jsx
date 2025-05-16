import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import CategoryForm from './CategoryForm';
import { Link } from '@inertiajs/react';

export default function Edit({ category }) {
    const handleSubmit = ({ data, put }) => {
        put(route('categories.update', category.id));
    };

    return (

        <>

        <Head title="Edit Category" />

        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Category</h1>

            <CategoryForm category={category} onSubmit={handleSubmit} />

            <div className="pt-4">
                <Link
                    href={route('categories.index')}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </div>

        </>
    );
}

Edit.layout = (page) => <AppLayout children={page} />;
