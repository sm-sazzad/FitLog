import { IData } from '@/lib/Type';
import React from 'react';
import DetailsCard from './DetailsCard';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const details = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const exercise: IData = await details.json();
    return (
        <div className='w-[80%] mx-auto my-10'>
            <DetailsCard exercise={exercise} />
        </div>
    );
};

export default page;