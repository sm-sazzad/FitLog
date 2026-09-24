"use client";
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import { IData } from '@/lib/Type';
import { useContext } from 'react';
import { BiCalendarCheck, BiCalendarPlus } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { MdOutlineBookmark } from 'react-icons/md';
import { toast } from 'react-toastify';

const DetailsPageBtn = ({ exercise }: { exercise: IData }) => {
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(ExcerciseContext)
    const isAddedPlan = todaysPlan.some(n => n.id === exercise.id);
    const isSaved = savedPlan.some(n => n.id === exercise.id);

    const handlePlanBtn = () => {
        if (isAddedPlan) {
            toast.warning(`Already in your plan`);
        }
        else {
            setTodaysPlan([...todaysPlan, exercise]);
            toast.success(`Added to today's plan`);
        }
    }

    const handleSaveBtn = () => {
        if (isSaved) {
            toast.warning(`Already in your save list`);
        }
        else {
            setSavedPlan([...savedPlan, exercise]);
            toast.success(`Saved for later`);
        }
    }

    return (
        <div className='flex flex-col sm:flex-row gap-2 mt-5 lg:mt-2'>
            <button onClick={handlePlanBtn}
                className={` ${isAddedPlan ? "bg-[#d5f45b] ring-2 ring-white" : "bg-[#CCFF00]"} flex items-center justify-center w-full sm:w-auto gap-2 py-2 px-3 cursor-pointer font-bold text-black rounded-xl`}>{isAddedPlan ? (<BiCalendarCheck />) : (<BiCalendarPlus className='font-extrabold' />)} {isAddedPlan ? "Added to Today's Plan" : "Add to today's plan"}</button>
            <button onClick={handleSaveBtn}
                className={`${isSaved ? "ring-2" : "ring"} flex items-center justify-center w-full sm:w-auto gap-2 py-2 px-3 cursor-pointer ring-stone-700 font-bold text-white rounded-2xl`}>{isSaved ? (<MdOutlineBookmark className='text-white' />) : (<FiBookmark />)} {isSaved ? "Saved" : "Save for later"}</button>
        </div>
    );
};

export default DetailsPageBtn;