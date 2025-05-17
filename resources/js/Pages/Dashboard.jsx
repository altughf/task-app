import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ taskCount,inProgressCount,completedCount,pendingCount,cancelledCount,categoryCount }) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className='flex w-full h-[480px] gap-4'>

                        <div className='flex flex-col w-1/4 h-full gap-4'>
                            <div className='flex flex-col p-0 bg-gray-100 rounded-lg border border-neutral-300 shadow-md overflow-hidden'>
                                <h3 className='text-lg font-semibold p-6 text-gray-800 bg-gray-200'>Task Status</h3>
                                <div className='divide-y divide-gray-300'>
                                    <div className='flex justify-between items-center p-6'>
                                        <span className='text-gray-700'>Total Tasks</span>
                                        <span className='text-xl font-bold text-gray-800'>{taskCount}</span>
                                    </div>
                                    <div className='flex justify-between items-center p-6'>
                                        <span className='text-gray-700'>In Progress</span>
                                        <span className='text-xl font-bold text-yellow-600'>{inProgressCount}</span>
                                    </div>
                                    <div className='flex justify-between items-center p-6'>
                                        <span className='text-gray-700'>Completed</span>
                                        <span className='text-xl font-bold text-green-600'>{completedCount}</span>
                                    </div>
                                    <div className='flex justify-between items-center p-6'>
                                        <span className='text-gray-700'>Pending</span>
                                        <span className='text-xl font-bold text-blue-600'>{pendingCount}</span>
                                    </div>
                                    <div className='flex justify-between items-center p-6'>
                                        <span className='text-gray-700'>Cancelled</span>
                                        <span className='text-xl font-bold text-red-600'>{cancelledCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-3/4 h-full gap-4'>
                            <Link href="/tasks" className='flex w-full h-full bg-neutral-300 rounded-lg shadow-md items-center justify-center hover:bg-neutral-400 transition-all'>
                                <div className="text-center text-white">
                                    <div className="text-xl font-bold">TASKS</div>
                                    <div className="text-5xl font-extrabold mt-2">{taskCount}</div>
                                </div>
                            </Link>
                            <Link href="/categories" className='flex w-full h-full bg-neutral-300 rounded-lg shadow-md items-center justify-center hover:bg-neutral-400 transition-all'>
                                <div className="text-center text-white">
                                    <div className="text-xl font-bold">CATEGORIES</div>
                                    <div className="text-5xl font-extrabold mt-2">{categoryCount}</div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <DashLayout children={page} />;
