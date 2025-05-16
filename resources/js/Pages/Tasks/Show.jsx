import React from 'react';
import { Head } from '@inertiajs/react';
import { usePage, Link, router } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';

export default function Show() {
    const { task } = usePage().props;

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this task?")) {
            router.delete(route('tasks.destroy', task.id));
        }
    };

    return (

        <>

        <Head title="Task" />

        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded">
            <h1 className="text-3xl font-semibold text-gray-900">{task.name}</h1>
            <p className="mt-2 text-lg text-gray-700">{task.description}</p>

            <div className="mt-6 space-y-2 text-gray-800 text-sm">
                <p><strong>Status:</strong> {task.status}</p>
                <p><strong>Priority:</strong> {task.priority}</p>
                <p><strong>Due Date:</strong> {task.due_date ? new Date(task.due_date).toLocaleString() : 'N/A'}</p>
                <p><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(task.updated_at).toLocaleString()}</p>

                <div>
                    <strong>Categories:</strong>
                    <div className="mt-1 flex flex-wrap gap-2">
                        {task.categories.map(category => (
                            <span
                                key={category.id}
                                className="px-2 py-1 rounded text-white text-xs"
                                style={{ backgroundColor: category.color }}
                            >
                                {category.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <Link
                    href={route('tasks.index')}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
                <div className="flex gap-2">
                    <Link
                        href={route('tasks.edit', task.id)}
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
