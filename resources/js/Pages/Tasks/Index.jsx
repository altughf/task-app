import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function Index({ tasks }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Görev Listesi</h1>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="p-4 border border-gray-200 rounded shadow-sm">
                        <h2 className="text-lg font-semibold">{task.name}</h2>
                        <p className="text-gray-600">{task.description}</p>

                        <div className="mt-2">
                            <Link
                                href={route('tasks.show', task.id)}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                            >
                                Aç
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Index.layout = (page) => <AppLayout children={page} />;
