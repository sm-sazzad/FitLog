import { getData } from "@/lib/DataFetch";
import LibrabyCard from "./LibrabyCard";

const LibrarySection = async () => {
    const workoutLibrary = await getData();

    return (
        <div id="library" className='w-[80%] mx-auto scroll-mt-20'>
            <div>
                <h1 className='font-oswald text-[30px] font-extrabold '>THE LIBRARY</h1>
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
                {
                    workoutLibrary.map(workouts => <LibrabyCard key={workouts.id} workouts={workouts} />)
                }
            </div>
        </div>
    );
};

export default LibrarySection;