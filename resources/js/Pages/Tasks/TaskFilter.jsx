import { useState } from 'react';

export default function TaskFilter({ onFilterChange, initialFilters }) {
    const [search, setSearch] = useState(initialFilters.search || '');
    const [status, setStatus] = useState(initialFilters.status);
    const [priority, setPriority] = useState(initialFilters.priority);
    const [sort, setSort] = useState(initialFilters.sort);
    const [direction, setDirection] = useState(initialFilters.direction);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange({ search, status, priority, sort, direction });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-4 items-end">
            <div>
                <label>Search</label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or description"
                    className="block border rounded px-2 py-1 w-80"
                />
            </div>

            <div>
                <label>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block border rounded pl-2 pr-16 py-1"
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
                    className="block border rounded pl-2 pr-14 py-1"
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
                    className="block border rounded pl-2 pr-16 py-1"
                >
                    <option value="due_date">Due Date</option>
                    <option value="created_at">Created At</option>
                </select>
            </div>

            <div>
                <label>Direction</label>
                <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="block border rounded pl-2 pr-16 py-1"
                >
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
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
