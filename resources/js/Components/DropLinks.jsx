import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const DropLinks = ({ children, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropLinksRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropLinksRef.current && !dropLinksRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleNavigation = () => {
            setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('popstate', handleNavigation);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('popstate', handleNavigation);
        };
    }, []);

    return (
        <div className="relative" ref={dropLinksRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600 transition flex items-center"
            >
                {trigger}
                <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md border border-neutral-300 py-1 z-50">
                    {React.Children.map(children, (child) => {
                        // Add onClick to close droplinks when any child is clicked
                        return React.cloneElement(child, {
                            onClick: () => setIsOpen(false),
                            className: `${child.props.className || ''} block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left`
                        });
                    })}
                </div>
            )}
        </div>
    );
};

export default DropLinks;
