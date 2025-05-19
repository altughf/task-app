import { useState } from 'react';

export default function TaskFilter({ onFilterChange, initialFilters }) {
    const [status, setStatus] = useState(initialFilters.status || '');
    const [priority, setPriority] = useState(initialFilters.priority || '');
    const [sort, setSort] = useState(initialFilters.sort || 'created_at');
    const [direction, setDirection] = useState(initialFilters.direction || 'desc');
    const [perPage, setPerPage] = useState(initialFilters.per_page || 10);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange({ status, priority, sort, direction, per_page: perPage });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 pl-5 pr-5 pt-3 pb-5 rounded-lg bg-white flex flex-wrap gap-4 items-end">
            <div>
                <label>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block border rounded pl-2 pr-12 py-1"
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
                    className="block border rounded pl-2 pr-12 py-1"
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

            <div>
                <label>Per Page</label>
                <select
                    value={perPage}
                    onChange={(e) => setPerPage(e.target.value)}
                    className="block border rounded pl-2 pr-16 py-1"
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
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
