"use client";
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import { IData } from '@/lib/Type';
import Link from 'next/link';
import { useContext } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const SelectedPageBtn = ({ btnType, cardData }: { btnType: string, cardData: IData }) => {
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(ExcerciseContext)

    const handleRemovePlan = () => {
        const remainingPlan = todaysPlan.filter(n => n.id !== cardData.id);
        setTodaysPlan(remainingPlan);
        toast.info(`Removed from today's plan`)
    }

    const handleRemoveSaved = () => {
        const remainingSavedItem = savedPlan.filter(n => n.id !== cardData.id);
        setSavedPlan(remainingSavedItem);
        toast.info(`Removed from saved`)
    }

    const handleMarkBtn = () => {
        const remainingPlan = todaysPlan.filter(n => n.id !== cardData.id);
        setTodaysPlan(remainingPlan);
        toast.success(`Workout logged — nice work`)
    }

    return (
        <div className='flex gap-3 max-[903]:mt-3 items-center'>
            <Link href={`/exercise/${cardData.id}`}><button className='py-2 px-3 ring ring-white font-white rounded-full cursor-pointer'>View Details</button></Link>
            {
                btnType !== "saved" ? (<button onClick={handleMarkBtn} className='flex gap-1 items-center py-2 px-3 bg-[#CCFF00] text-black font-bold rounded-full cursor-pointer'><IoCheckmarkSharp className='inline' />Mark as Done</button>
                ) : ("")
            }
            <RxCross2 onClick={btnType === "plan" ? handleRemovePlan : handleRemoveSaved}
                className='inline text-2xl font-bold cursor-pointer' />
        </div>
    );
};

export default SelectedPageBtn;