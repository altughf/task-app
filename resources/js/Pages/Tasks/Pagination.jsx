import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    const getClassName = (active) => {
        return active 
            ? 'px-3 py-1 bg-neutral-300 text-white rounded-md'
            : 'px-3 py-1 bg-neutral-50 text-gray-700 rounded-md hover:bg-gray-300';
    };

    return (
        <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-2">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        disabled={!link.url}
                        className={`${getClassName(link.active)} ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                        preserveState
                    >
                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
