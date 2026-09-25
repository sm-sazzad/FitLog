import { IData } from '@/lib/Type';
import DetailsCard from './DetailsCard';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const details = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

    if (!details.ok) {
        notFound();
    }

    const exercise: IData = await details.json();

    if (!exercise) {
        notFound();
    }

    return (
        <div className='w-[90%] sm:w-[80%] mx-auto my-10 scroll-mt-20'>
            <DetailsCard exercise={exercise} />
        </div>
    );
};

export default page;