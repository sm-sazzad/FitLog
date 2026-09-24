"use client"
import { ExcerciseContext } from '@/Context/ExcerciseProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

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
            <li><Link href={"/my-plan"}>Saved <span className='px-3 rounded-full inline-block text-white border'>{savedPlan.length}</span></Link></li>
        </>
    )
}


const Menu = () => {
    const { isOpen, setIsOpen } = useContext(ExcerciseContext);

    return <HiMenuAlt1 onClick={() => setIsOpen(true)}
        className='bolck sm:hidden text-2xl' />
}


const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(ExcerciseContext);
    const PathName = usePathname();

    const link = <NavLink />
    return (
        <div onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/50 z-100 transition-opacity duration-400 sm:hidden ${isOpen ? " opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"}`}>
            <ul onClick={(e) => e.stopPropagation()}
                className={`absolute top-0 left-0 bottom-0 w-64 h-screen bg-white text-black py-5 transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <RxCross2 onClick={() => setIsOpen(false)}
                    className='font-bold text-2xl justify-self-end mr-5 mb-5 cursor-pointer' />
                <li
                    className={`${PathName === "/" ? "text-[white] bg-stone-900 font-bold" : ""} duration-300 py-3 px-4 hover:bg-stone-400`}><Link href={"/"} onClick={() => setIsOpen(false)} className='block'>Workouts</Link></li>
                <li
                    className={`${PathName === "/my-plan" ? "text-[white] bg-stone-900 font-bold" : ""} duration-300 py-3 px-4 hover:bg-stone-400`}><Link href={"/my-plan"} onClick={() => setIsOpen(false)} className='block'>My Plan</Link></li>
            </ul>
        </div>
    )

}



export default NavLink;
export { Menu };
export { PlanAndSave };
export { Sidebar };