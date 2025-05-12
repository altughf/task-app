import AppLayout from '@/Layouts/AppLayout';

export default function Index({ tasks }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Görev Listesi</h1>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="p-4 border border-gray-200 rounded shadow-sm">
                        <h2 className="text-lg font-semibold">{task.name}</h2>
                        <p className="text-gray-600">{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Index.layout = (page) => <AppLayout children={page} />;
