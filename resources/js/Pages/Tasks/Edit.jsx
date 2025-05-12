import AppLayout from '@/Layouts/AppLayout';
import TaskForm from './TaskForm';

export default function Edit({ task }) {
    const handleSubmit = ({ data, put }) => {
        put(route('tasks.update', task.id));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Görevi Düzenle</h1>
            <TaskForm task={task} onSubmit={handleSubmit} />
        </div>
    );
}

Edit.layout = (page) => <AppLayout children={page} />;
