import React from 'react';
import { Head } from '@inertiajs/react';
import DashLayout from '@/Layouts/DashLayout';
import TaskForm from './TaskForm';

export default function Create({ statuses, priorities, categories }) {
    const handleSubmit = ({ data, post }) => {
        post(route('tasks.store'));
    };

    return (
        <>

        <Head title="Create Task" />

        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Task</h1>
            <TaskForm
                onSubmit={handleSubmit}
                statuses={statuses}
                priorities={priorities}
                categories={categories}
            />
        </div>

        </>
    );
}

Create.layout = (page) => <DashLayout children={page} />;
