import Image from 'next/image';
import navlogo from '@/assets/logo.png'
import NavLink, { PlanAndSave } from './NavLink/NavLink';

const Navbar = () => {
    const link = <NavLink />
    return (
        <div className='bg-black py-4 border-b border-stone-700 sticky top-0 z-50'>
            <nav className='w-[80%] mx-auto flex justify-between items-center gap-1 cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <Image src={navlogo} alt='FitLog'></Image>
                    <h1 className='font-extrabold text-2xl tracking-wider '>FITLOG</h1>
                </div>
                <ul className='flex items-center space-x-3 font-semibold'>
                    {link}
                </ul>
                <ul className='flex items-center space-x-3 font-semibold'>
                    <PlanAndSave />
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;