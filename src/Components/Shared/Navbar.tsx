import Image from 'next/image';
import navlogo from '@/assets/logo.png'
import NavLink, { Menu, PlanAndSave, Sidebar } from '../NavLink/NavLink';
import { HiMenuAlt1 } from 'react-icons/hi';
import Link from 'next/link';

const Navbar = () => {
    const link = <NavLink />
    return (<>
        <div className='bg-black py-4 border-b border-stone-700 sticky top-0 z-50'>
            <nav className='w-[95%] sm:w-[80%] mx-auto flex justify-between items-center gap-1 cursor-pointer'>
                <Menu />
                <Link href={"/"}>
                    <div className='flex items-center gap-2'>
                        <Image src={navlogo} alt='FitLog'></Image>
                        <h1 className='font-extrabold text-2xl tracking-wider font-oswald'>FITLOG</h1>
                    </div>
                </Link>
                <ul className='hidden sm:flex items-center space-x-3 font-semibold'>
                    {link}
                </ul>
                <ul className='flex items-center space-x-2 sm:space-x-4 font-semibold'>
                    <PlanAndSave />
                </ul>
            </nav>
        </div>
        <div>
            <Sidebar />
        </div>
    </>);
};

export default Navbar;