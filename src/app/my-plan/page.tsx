import Excercises, { Calories, Minutes } from './Calculation';
import MyPlanSection from './SelectecPlanSection/MyPlanSection';

const page = () => {
    return (
        <div className='w-[90%] sm:w-[80%] mx-auto'>
            <div className='my-5 md:my-10 space-y-4'>
                <h1 className='font-oswald text-4xl font-extrabold '>My Plan</h1>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='bg-[#13161D] ring ring-[#232732] space-y-3 min-[400px]:space-y-0 min-[400px]:flex min-[400px]:justify-evenly py-3 px-5 rounded-2xl mb-10'>
                <div className='min-[400px]:text-center'>
                    <span className='text-[#8A92A0]'>Excercises</span>
                    <Excercises />
                </div>
                <span className="divider divider-horizontal"></span>
                <div className='min-[400px]:text-center'>
                    <span className='text-[#8A92A0]'>Minutes</span>
                    <Minutes />
                </div>
                <span className="divider divider-horizontal"></span>
                <div className='min-[400px]:text-center'>
                    <span className='text-[#8A92A0]'>Calories</span>
                    <Calories />
                </div>
            </div>
            <MyPlanSection />
        </div>
    );
};

export default page;