import React from 'react';
import { Head } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';
import TaskForm from './TaskForm';

export default function Edit({ task, statuses, priorities, categories }) {
    const handleSubmit = ({ data, put }) => {
        put(route('tasks.update', task.id));
    };

    return (

        <>

        <Head title="Edit Task" />
        
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

        </>
    );
}

Edit.layout = (page) => <DashLayout children={page} />;
