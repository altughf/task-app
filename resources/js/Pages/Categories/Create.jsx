import AppLayout from '@/Layouts/AppLayout';
import CategoryForm from './CategoryForm';
import { Link } from '@inertiajs/react';

export default function Create() {
    const handleSubmit = ({ data, post }) => {
        post(route('categories.store'));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Category</h1>

            <CategoryForm onSubmit={handleSubmit} />

            <div className="pt-4">
                <Link
                    href={route('categories.index')}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} />;
