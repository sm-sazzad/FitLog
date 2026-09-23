import Link from 'next/link';

const NavLink = () => {
    return (
        <>
            <li><Link href={"/"}>Workouts</Link></li>
            <li><Link href={"/my-plan"}>My Plan</Link></li>
        </>
    );
};


const PlanAndSave = () => {
    return (
        <>
            <li><Link href={"/my-plan"}>Plan <span className='px-3 rounded-full inline-block text-black bg-[#c2f800]'>0</span></Link></li>
            <li><Link href={"/my-plan"}>Saved <span className='px-3 rounded-full inline-block text-white ring'>0</span></Link></li>
        </>
    )
}


export default NavLink;
export { PlanAndSave };