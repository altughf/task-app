import AppLayout from '@/Layouts/AppLayout';
import TaskForm from './TaskForm';

export default function Edit({ task, statuses, priorities, categories }) {
    const handleSubmit = ({ data, put }) => {
        put(route('tasks.update', task.id));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskForm
                task={task}
                onSubmit={handleSubmit}
                statuses={statuses}
                priorities={priorities}
                categories={categories}
            />
        </div>
    );
}

Edit.layout = (page) => <AppLayout children={page} />;
