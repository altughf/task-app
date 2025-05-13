import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function TaskForm({ task = null, statuses = [], priorities = [], onSubmit }) {

    // Helper function > Convert UTC Date & Time
    function formatDateTime(datetimeString) {
        const date = new Date(datetimeString);
        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60 * 1000);
        return localDate.toISOString().slice(0, 16);
    }

    const { data, setData, put, post, processing, errors } = useForm({
        name: task?.name || '',
        description: task?.description || '',
        status: task?.status || 'pending',
        priority: task?.priority || 'medium',
        due_date: task?.due_date ? formatDateTime(task.due_date) : '',
    });

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ data, post, put });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            {/* Task Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Task Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
            </div>

            {/* Status */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                >
                    {statuses.map((status) => (
                        <option key={status} value={status}>
                            {status.replace('_', ' ')}
                        </option>
                    ))}
                </select>
                {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
            </div>

            {/* Priority */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                    value={data.priority}
                    onChange={(e) => setData('priority', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                >
                    {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                            {priority}
                        </option>
                    ))}
                </select>
                {errors.priority && <div className="text-red-500 text-sm">{errors.priority}</div>}
            </div>

            {/* Due Date & Time */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Due Date & Time</label>
                <input
                    type="datetime-local"
                    value={data.due_date}
                    onChange={(e) => setData('due_date', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                />
                {errors.due_date && <div className="text-red-500 text-sm">{errors.due_date}</div>}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={processing}
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
                    processing ? 'opacity-50' : ''
                }`}
            >
                Save
            </button>

            {/* Back */}
            <div className="pt-4">
                <Link
                    href={route('tasks.index')}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </form>
    );
}
