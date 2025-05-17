import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className='flex w-full h-[640px] gap-4'>

                        <div className='flex flex-col w-full h-full gap-4 bg-neutral-400'>

                            <div className='flex w-full h-full gap-4'>
                                <div className='flex w-full h-full bg-neutral-500'>
                                    <div>TASKS</div>

                                </div>
                                <div className='flex w-full h-full bg-neutral-500'>
                                    <div>CATEGORIES</div>

                                </div>
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
