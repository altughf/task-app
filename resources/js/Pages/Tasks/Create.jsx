import AppLayout from '@/Layouts/AppLayout';
import TaskForm from './TaskForm';

export default function Create({ statuses, priorities }) {
    const handleSubmit = ({ data, post }) => {
        post(route('tasks.store'));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Task</h1>
            <TaskForm onSubmit={handleSubmit} statuses={statuses} priorities={priorities} />
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} />;
