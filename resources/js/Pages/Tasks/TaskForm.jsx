import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function TaskForm({ task = null, statuses = [], priorities = [], categories = [], onSubmit }) {
    const { data, setData, put, post, processing, errors } = useForm({
        name: task?.name || '',
        description: task?.description || '',
        status: task?.status || 'pending',
        priority: task?.priority || 'medium',
        due_date: task?.due_date || '',
        category_ids: task?.categories?.map(cat => cat.id) || [],
    });

    const handleCheckboxChange = (categoryId) => {
        if (data.category_ids.includes(categoryId)) {
            setData('category_ids', data.category_ids.filter(id => id !== categoryId));
        } else {
            setData('category_ids', [...data.category_ids, categoryId]);
        }
    };

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

            {/* Due Date */}
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

            {/* Categories */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <label key={category.id} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={data.category_ids.includes(category.id)}
                                onChange={() => handleCheckboxChange(category.id)}
                            />
                            <span className="text-sm">{category.name}</span>
                        </label>
                    ))}
                </div>
                {errors.category_ids && <div className="text-red-500 text-sm">{errors.category_ids}</div>}
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
                    className="bg-neutral-50 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </form>
    );
}
