"use client";
import { ExcerciseContext } from "@/Context/ExcerciseProvider";
import { useContext, useState } from "react";
import SelectedCard from "./SelectedCard";
import Link from "next/link";
import { IData } from "@/lib/Type";

const MyPlanSection = () => {
    const { todaysPlan, savedPlan, btnType, setBtnType } = useContext(ExcerciseContext);
    const [sortBy, setSortBy] = useState<'rating' | 'calorie' | 'time'>('time');

    const Filter = (allData: IData[]) => {
        let FilteredData = [...allData];
        if (sortBy === "rating") {
            FilteredData.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "calorie") {
            FilteredData.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === "time") {
            FilteredData.sort((a, b) => b.duration - a.duration);
        }
        return FilteredData;
    }


    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <div>
                    <div className="flex justify-evenly w-auto bg-[#151921] py-1 px-1 rounded-2xl cursor-pointer">
                        <div onClick={() => setBtnType("plan")}
                            className={`${btnType === "plan" ? "py-2 px-5 rounded-2xl bg-[#1F242D] ring ring-[#2B303D] text-[#CCFF00]" : "py-2 px-5"}`}>Today's Plan</div>
                        <div onClick={() => setBtnType("saved")}
                            className={`${btnType === "saved" ? "py-2 px-5 rounded-2xl bg-[#1F242D] ring ring-[#2B303D] text-[#CCFF00]" : "py-2 px-5"}`}>Saved</div>
                    </div>
                </div>
                <div className="sm:flex items-center gap-2">
                    <h1 className="font-semibold">Sort By</h1>
                    <select defaultValue={"time"}
                        onChange={(e) => setSortBy(e.target.value as 'rating' | 'calorie' | 'time')}
                        className="bg-[#1F242D] text-white px-4 py-2 rounded-xl border border-[#2B303D] outline-none cursor-pointer hover:border-[#C2F800] focus:ring-1 focus:ring-[#C2F800] transition-colors"
                    >
                        <option value="rating">⭐ Rating</option>
                        <option value="time">⏱ Duration</option>
                        <option value="calorie">🔥 Calorie</option>
                    </select>
                </div>
            </div>
            <div className="my-10">
                {
                    btnType === "plan" ? (todaysPlan.length === 0 ? (
                        <div className="border-2 border-dashed border-stone-800 rounded-2xl text-center p-10 sm:p-20 space-y-3">
                            <h1 className="font-oswald text-3xl sm:text-4xl">NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href={"/"}><button className="py-2 px-5 rounded-2xl text-black font-semibold cursor-pointer bg-[#CCFF00]">Go to workouts</button></Link>
                        </div>
                    ) : (
                        <div className="max-[903px]:grid max-[903px]:grid-cols-2 max-[903px]:gap-2 max-sm:grid-cols-1">
                            {
                                Filter(todaysPlan).map(cardData => <SelectedCard key={cardData.id} cardData={cardData} btnType={btnType} />)
                            }
                        </div>
                    )) : (savedPlan.length === 0 ? (
                        <div className="border-2 border-dashed border-stone-800 rounded-2xl text-center p-10 sm:p-20 space-y-3">
                            <h1 className="font-oswald text-3xl sm:text-4xl">NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href={"/"}><button className="py-2 px-5 rounded-2xl text-black font-semibold cursor-pointer bg-[#CCFF00]">Go to workouts</button></Link>
                        </div>
                    ) : (<div className="max-[903px]:grid max-[903px]:grid-cols-2 max-sm:gap-0 max-[903px]:gap-2 max-sm:grid-cols-1">
                        {
                            Filter(savedPlan).map(cardData => <SelectedCard key={cardData.id} cardData={cardData} btnType={btnType} />)
                        }
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyPlanSection;