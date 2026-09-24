import { IData } from '@/lib/Type';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import SelectedPageBtn from './SelectedPageBtn/SelectedPageBtn';

const SelectedCard = ({ cardData, btnType }: { cardData: IData, btnType: string }) => {
    return (
        <div className='flex justify-between items-center gap-1 py-3 px-5 bg-[#14171E] my-5 rounded-2xl'>
            <div className='flex items-center gap-4 '>
                <div>
                    <Image className='h-20 w-30 object-cover rounded-2xl'
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