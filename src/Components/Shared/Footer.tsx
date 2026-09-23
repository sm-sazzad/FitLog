import Image from 'next/image';
import navlogo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className='bg-black border-t border-stone-700 py-6'>
            <div className='w-[90%] mx-auto flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={navlogo} alt='fitlog' className='-rotate-45'></Image>
                    <h1 className='font-bold text-2xl'>FitLog</h1>
                </div>
                <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;