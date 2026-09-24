import { IData } from '@/lib/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCalendarPlus } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';

const DetailsCard = ({ exercise }: { exercise: IData }) => {
    return (
        <div className='flex gap-5 items-center'>
            <div>
                <Image className='h-170 w-full object-cover rounded-xl'
                    src={exercise.image} width={400} height={700} alt={exercise.name}></Image>
            </div>
            <div>
                <div className='space-y-2 ' >
                    <h1 className={`text-3xl font-extrabold font-oswald`}>{exercise.name}</h1>
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
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>EQUIPMENT</span>
                        <span className='font-semibold'>{exercise.equipment}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>DIFFICULTY</span>
                        <span className='font-semibold'>{exercise.difficulty}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>SETS</span>
                        <span className='font-semibold'>{exercise.sets}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>REPS</span>
                        <span className='font-semibold'>{exercise.reps}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>DURATION</span>
                        <span className='font-semibold'>{exercise.duration}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-stone-700 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>CALORIES</span>
                        <span className='font-semibold'>{exercise.caloriesBurned}</span>
                    </div>
                    <div className='flex justify-between py-3 px-4'>
                        <span className='text-[#9CA3AF] font-semibold'>RATING</span>
                        <span className='font-semibold'>{exercise.rating}</span>
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
                <div className='flex gap-2 mt-2'>
                    <button className='flex items-center gap-2 py-2 px-3 cursor-pointer bg-[#CCFF00] font-bold text-black rounded-xl'><BiCalendarPlus className='font-extrabold' />Add to today's plan</button>
                    <button className='flex items-center gap-2 py-2 px-3 cursor-pointer ring ring-stone-700 font-bold text-white rounded-2xl'><FiBookmark />Save for later</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;