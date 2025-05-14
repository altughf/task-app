import AppLayout from '@/Layouts/AppLayout';
import { Link, useForm, router } from '@inertiajs/react';
import TaskFilter from './TaskFilter';

export default function Index({ tasks, filters }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this task?')) {
            destroy(route('tasks.destroy', id));
        }
    };

    const handleStatusChange = (taskId, newStatus) => {
        router.patch(route('tasks.status', taskId), {
            status: newStatus,
        }, {
            preserveScroll: true,
            only: ['tasks'],
            onSuccess: () => {
                console.log('Status updated successfully.');
            },
            onError: (errors) => {
                console.error('Validation failed:', errors);
            }
        });
    };

    const handleFilterChange = (filters) => {
        router.get(route('tasks.index'), filters, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>

            {/* Filter Component */}
            <TaskFilter onFilterChange={handleFilterChange} initialFilters={filters} />

            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="p-4 border border-gray-200 rounded shadow-sm">
                        <h2 className="text-lg font-semibold">{task.name}</h2>
                        <p className="text-gray-600">{task.description}</p>

                        <div className="mt-2">
                            <label className="block mt-2">
                                <strong>Status:</strong>
                                <select
                                    value={task.status}
                                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                    className="ml-2 border border-gray-300 rounded w-40"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </label>

                            <p><strong>Priority:</strong> {task.priority}</p>
                            <p><strong>Due Date:</strong> {task.due_date ? new Date(task.due_date).toLocaleString() : 'N/A'}</p>
                            <p><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(task.updated_at).toLocaleString()}</p>

                            <div className="mt-2">
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

                        <div className="mt-4 flex gap-2">
                            <Link
                                href={route('tasks.show', task.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                            >
                                Open
                            </Link>
                            <Link
                                href={route('tasks.edit', task.id)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Index.layout = (page) => <AppLayout children={page} />;
