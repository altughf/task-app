import AppLayout from '@/Layouts/AppLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ tasks }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this task?')) {
            destroy(route('tasks.destroy', id));
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="p-4 border border-gray-200 rounded shadow-sm">
                        <h2 className="text-lg font-semibold">{task.name}</h2>
                        <p className="text-gray-600">{task.description}</p>

                        <div className="mt-2">
                            <p><strong>Status:</strong> {task.status}</p>
                            <p><strong>Priority:</strong> {task.priority}</p>
                            <p><strong>Due Date:</strong> {task.due_date ? new Date(task.due_date).toLocaleString() : 'N/A'}</p>
                            <p><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(task.updated_at).toLocaleString()}</p>
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
