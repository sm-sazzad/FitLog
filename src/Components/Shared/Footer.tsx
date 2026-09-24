import Image from 'next/image';
import footerlogo from '@/assets/Footer.png'

const Footer = () => {
    return (
        <footer className='bg-black border-t border-stone-700 py-6'>
            <div className='w-[90%] mx-auto sm:flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={footerlogo} alt='fitlog' className='h-10 w-fit'></Image>
                    {/* <h1 className='font-oswald font-bold text-2xl'>FitLog</h1> */}
                </div>
                <p className='text-[#6B7280] mt-5 sm:mt-0'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;