"use client"
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const NavLink = () => {
    const PathName = usePathname();
    return (
        <>
            <li className={`${PathName === "/" ? "text-[#c2f800] font-bold" : ""} hover:text-[#c2f800] duration-300 hover:scale-105`}><Link href={"/"}>Workouts</Link></li>
            <li className={`${PathName === "/my-plan" ? "text-[#c2f800] font-bold" : ""} hover:text-[#c2f800] duration-300 hover:scale-105`}><Link href={"/my-plan"}>My Plan</Link></li>
        </>
    );
};


const PlanAndSave = () => {
    const { todaysPlan, savedPlan } = useContext(ExcerciseContext)

    return (
        <>
            <li><Link href={"/my-plan"}>Plan <span className='px-3 rounded-full inline-block text-black bg-[#c2f800]'>{todaysPlan.length}</span></Link></li>
            <li><Link href={"/my-plan"}>Saved <span className='px-3 rounded-full inline-block text-white ring'>{savedPlan.length}</span></Link></li>
        </>
    )
}


export default NavLink;
export { PlanAndSave };