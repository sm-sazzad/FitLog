import bannerImg from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='w-[80%] mx-auto my-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center bg-[#15171d] p-8 md:p-14 rounded-xl'>
            <div className='w-full md:w-[60%] space-y-4'>
                <span className='font-oswald text-[#C2F800]'>WORKOUT LIBRARY</span>
                <h1 className='font-oswald text-[40px] md:text-[50px] font-bold leading-none'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <button className='py-3 px-6 bg-[#C2F800] text-black font-semibold rounded-xl shadow-amber-400 hover:-translate-y-1 hover:shadow-lg duration-300 cursor-pointer'>
                    <a href="#library">BROWSE WORKOUTS</a>
                </button>
            </div>
            <div className='w-full md:w-[40%]'>
                <Image src={bannerImg} alt='FitLog' className='justify-self-center md:justify-self-end'></Image>
            </div>
        </div>
    );
};

export default Banner;