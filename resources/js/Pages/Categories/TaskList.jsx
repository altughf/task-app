import React from 'react';
import { Head, router } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';
import TaskFilter from './TaskFilter';
import Pagination from '../Tasks/Pagination';

export default function TaskList({ category, tasks, filters }) {
    const handleFilterChange = (filters) => {
        router.get(route('categories.list', category.id), filters, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <Head title={`Tasks in ${category.name}`} />

            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Tasks in {category.name}</h1>

                {/* Filter Component */}
                <TaskFilter onFilterChange={handleFilterChange} initialFilters={filters} />

                <ul className="space-y-4">
                    {tasks.data.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-start justify-between gap-2 p-4 border border-gray-200 bg-white rounded"
                        >
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">{task.name}</h2>
                                <p className="text-gray-600">{task.description}</p>

                                <div className="flex flex-col gap-2">
                                    <p><strong>Status:</strong> {task.status}</p>
                                    <p><strong>Priority:</strong> {task.priority}</p>
                                    <p><strong>Due Date:</strong> {task.due_date ? new Date(task.due_date).toLocaleString() : 'N/A'}</p>
                                    <p><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</p>
                                    <p><strong>Updated At:</strong> {new Date(task.updated_at).toLocaleString()}</p>

                                    <div className="flex justify-start items-center gap-2 mt-2">
                                        <strong>Categories:</strong>
                                        <div className="flex flex-wrap gap-2">
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
                            </div>
                        </li>
                    ))}
                </ul>

                {tasks.data.length > 0 && tasks.last_page > 1 && (
                    <Pagination links={tasks.links} />
                )}
            </div>
        </>
    );
}

TaskList.layout = (page) => <DashLayout children={page} />;
