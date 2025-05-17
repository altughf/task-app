import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ taskCount, categoryCount }) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className='flex w-full h-[640px] gap-4'>

                        <div className='flex flex-col w-full h-full gap-4'>

                            <div className='flex w-full h-full gap-4'>
                                <Link href="/tasks" className='flex w-full h-full bg-neutral-500 items-center justify-center hover:bg-neutral-600 transition-colors'>
                                    <div className="text-center">
                                        <div className="text-xl font-bold">TASKS</div>
                                        <div className="text-3xl">{taskCount}</div>
                                    </div>
                                </Link>
                                <Link href="/categories" className='flex w-full h-full bg-neutral-500 items-center justify-center hover:bg-neutral-600 transition-colors'>
                                    <div className="text-center">
                                        <div className="text-xl font-bold">CATEGORIES</div>
                                        <div className="text-3xl">{categoryCount}</div>
                                    </div>
                                </Link>
                            </div>

                            <div className='flex w-full h-full bg-neutral-500'>
                                <div>COMPLETED TASKS</div>

                            </div>

                        </div>

                        <div className='flex w-full h-full max-w-lg bg-neutral-400'>

                            <div>DUE SOON</div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <DashLayout children={page} />;
