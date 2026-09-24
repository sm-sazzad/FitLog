"use client"
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import React, { useContext } from 'react';

const Excercises = () => {
    const { todaysPlan, savedPlan, btnType } = useContext(ExcerciseContext)
    return (
        <>
            {
                btnType === 'plan' ? (<h1 className='font-bold text-4xl text-[#CCFF00] '>{todaysPlan.length}</h1>) :
                    (<h1 className='font-bold text-4xl text-[#CCFF00] '>{savedPlan.length}</h1>)
            }
        </>
    );
};


const Minutes = () => {
    const { todaysPlan, savedPlan, btnType } = useContext(ExcerciseContext)
    let PlanDuration: number;
    if (btnType === 'plan') {
        PlanDuration = todaysPlan.reduce((acc, excercies) => acc + excercies.duration, 0)
    }
    else {
        PlanDuration = savedPlan.reduce((acc, excercies) => acc + excercies.duration, 0)
    }

    return (<h1 className='font-bold text-4xl' >{PlanDuration}</h1>);
}


const Calories = () => {
    const { todaysPlan, savedPlan, btnType } = useContext(ExcerciseContext)
    let TotalCalories: number;
    if (btnType === 'plan') {
        TotalCalories = todaysPlan.reduce((acc, excercies) => acc + excercies.caloriesBurned, 0)
    }
    else {
        TotalCalories = savedPlan.reduce((acc, excercies) => acc + excercies.caloriesBurned, 0)
    }
    return (<h1 className='font-bold text-4xl'>{TotalCalories}</h1>);
}



export default Excercises;
export { Minutes };
export { Calories };