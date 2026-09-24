import { IData } from '@/lib/Type';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';

const LibrabyCard = ({ workouts }: { workouts: IData }) => {
    return (
        <Link href={`/exercise/${workouts.id}`}>
            <div className='flex flex-col bg-[#15171D] rounded-2xl ring-2 ring-[#222630] hover:ring-[#C2F800] duration-300'>
                <div>
                    <Image className='h-60 w-full object-cover rounded-t-2xl'
                        src={workouts.image} width={400} height={300} alt={workouts.name}></Image>
                </div>
                <div className='p-5 space-y-2  '>
                    <div className='space-y-2 border-b border-b-stone-600 pb-6' >
                        <ul className='flex gap-2'>
                            {
                                workouts.muscleGroups.map((muscles, indx) =>
                                    <li key={indx} className='py-1 px-4 bg-[#C2F800] rounded-full text-black font-bold mb-2'>{muscles}</li>
                                )
                            }
                        </ul>
                        <h1 className={`text-2xl font-extrabold font-oswald`}>{workouts.name}</h1>
                        <p className='text-[#9CA3AF]'>{workouts.equipment}</p>
                    </div>
                    <div className='flex gap-5 py-2 text-[#9CA3AF]'>
                        <div className='flex gap-1 items-center '>
                            <MdOutlineAccessTime className='text-xl' />
                            <span>{workouts.duration} min</span>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <PiFireSimpleFill className='text-xl' />
                            <span>{workouts.caloriesBurned} kcal</span>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <FaRegStar className='text-xl' />
                            <span>{workouts.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibrabyCard;