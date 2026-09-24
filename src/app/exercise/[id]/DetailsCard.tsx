import { IData } from '@/lib/Type';
import Image from 'next/image';
import DetailsPageBtn from './DetailsBtn/DetailsPageBtn';

const DetailsCard = ({ exercise }: { exercise: IData }) => {
    return (
        <div className='lg:flex gap-5 items-center'>
            <div>
                <Image className='h-70 md:h-130 lg:h-170 w-full object-cover rounded-xl'
                    src={exercise.image} width={400} height={700} alt={exercise.name}></Image>
            </div>
            <div>
                <div className='space-y-2 ' >
                    <h1 className={`text-3xl font-extrabold font-oswald mt-3 lg:mt-0`}>{exercise.name}</h1>
                    <p className='text-[#9CA3AF]'>{exercise.description}</p>
                    <ul className='flex gap-2'>
                        {
                            exercise.muscleGroups.map((muscles, indx) =>
                                <li key={indx} className='py-1 px-4 bg-[#C2F800] rounded-full text-black font-bold mb-2'>{muscles}</li>
                            )
                        }
                    </ul>
                </div>
                <div className='bg-[#1E2330] ring ring-stone-700 rounded-2xl my-3'>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>EQUIPMENT</span>
                        <h1 className='font-semibold'>{exercise.equipment}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>DIFFICULTY</span>
                        <h1 className='font-semibold'>{exercise.difficulty}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>SETS</span>
                        <h1 className='font-semibold'>{exercise.sets}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>REPS</span>
                        <h1 className='font-semibold'>{exercise.reps}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>DURATION</span>
                        <h1 className='font-semibold'>{exercise.duration}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>CALORIES</span>
                        <h1 className='font-semibold'>{exercise.caloriesBurned}</h1>
                    </div>
                    <div className='sm:flex justify-between py-3 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>RATING</span>
                        <h1 className='font-semibold'>{exercise.rating}</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-oswald my-2'>INSTRUCTIONS</h1>
                    <ol className='list-decimal pl-4 text-[#D1D5DB] space-y-1'>
                        {
                            exercise.instructions.map((ins, indx) => <li key={indx}>{ins}</li>)
                        }
                    </ol>
                </div>
                <DetailsPageBtn exercise={exercise} />
            </div>
        </div>
    );
};

export default DetailsCard;