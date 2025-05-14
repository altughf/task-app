import { useState } from 'react';

export default function TaskFilter({ onFilterChange }) {
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [sort, setSort] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange({ status, priority, sort });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-4 items-end">
            <div>
                <label>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block border rounded px-2 py-1"
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>

            <div>
                <label>Priority</label>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="block border rounded px-2 py-1"
                >
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label>Sort By</label>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="block border rounded px-2 py-1"
                >
                    <option value="">Default</option>
                    <option value="due_date">Due Date</option>
                    <option value="created_at">Created At</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Apply
            </button>
        </form>
    );
}
