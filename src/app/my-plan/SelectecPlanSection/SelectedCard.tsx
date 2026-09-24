import { IData } from '@/lib/Type';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import SelectedPageBtn from './SelectedPageBtn/SelectedPageBtn';

const SelectedCard = ({ cardData, btnType }: { cardData: IData, btnType: string }) => {
    return (
        <div className='flex min-[905px]:flex-row flex-col  min-[905px]:justify-between  min-[905px]:items-center min-[905px]:gap-1 py-3 px-3 bg-[#14171E] my-2 min-[905px]:my-5 rounded-2xl'>
            <div className='flex min-[905px]:flex-row flex-col min-[905px]:items-center gap-4 '>
                <div>
                    <Image className='h-40 w-full min-[905px]:h-25  min-[905px]:w-35 object-cover rounded-2xl'
                        src={cardData.image} alt={cardData.name} height={200} width={550}></Image>
                </div>
                <div>
                    <h1 className='font-oswald text-xl font-semibold'>{cardData.name}</h1>
                    <p className='text-[#8A92A0]'>{cardData.equipment}</p>
                    <div className='flex gap-4 py-1 text-[#9CA3AF]'>
                        <div className='flex gap-1 items-center  text-[#CCFF00]'>
                            <MdOutlineAccessTime className='text-xl' />
                            <span>{cardData.duration} min</span>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <PiFireSimpleFill className='text-xl text-[#CCFF00]' />
                            <span>{cardData.caloriesBurned} kcal</span>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <FaRegStar className='text-xl text-[#CCFF00]' />
                            <span>{cardData.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            <SelectedPageBtn btnType={btnType} cardData={cardData} />
        </div>
    );
};

export default SelectedCard;