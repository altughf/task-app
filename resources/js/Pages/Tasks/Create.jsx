import AppLayout from '@/Layouts/AppLayout';
import TaskForm from './TaskForm';

export default function Create() {
    const handleSubmit = ({ data, post }) => {
        post(route('tasks.store'));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Yeni Görev Oluştur</h1>
            <TaskForm onSubmit={handleSubmit} />
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} />;
