"use client";
import { ExcerciseContext } from "@/Context/ExcerciseProvider";
import { useContext, useState } from "react";
import SelectedCard from "./SelectedCard";
import Link from "next/link";

const MyPlanSection = () => {
    const [btnType, setBtnType] = useState<'plan' | 'saved'>('plan')
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(ExcerciseContext)
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex items-center justify-evenly bg-[#151921] py-1 px-1 rounded-2xl cursor-pointer">
                    <div onClick={() => setBtnType("plan")}
                        className={`${btnType === "plan" ? "py-2 px-5 rounded-2xl bg-[#1F242D] ring ring-[#2B303D]" : "py-2 px-5"}`}>Today's Plan</div>
                    <div onClick={() => setBtnType("saved")}
                        className={`${btnType === "saved" ? "py-2 px-5 rounded-2xl bg-[#1F242D] ring ring-[#2B303D]" : "py-2 px-5"}`}>Saved</div>
                </div>
                <div>
                    sort by
                </div>
            </div>
            <div className="my-10">
                {
                    btnType === "plan" ? (todaysPlan.length === 0 ? (
                        <div className="border-2 border-dashed border-stone-800 rounded-2xl text-center p-20 space-y-3">
                            <h1 className="font-oswald text-4xl">NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href={"/"}><button className="py-2 px-5 rounded-2xl text-black font-semibold cursor-pointer bg-[#CCFF00]">Go to workouts</button></Link>
                        </div>
                    ) : (
                        todaysPlan.map(cardData => <SelectedCard key={cardData.id} cardData={cardData} />)
                    )) : (savedPlan.length === 0 ? (
                        <div className="border-2 border-dashed border-stone-800 rounded-2xl text-center p-20 space-y-3">
                            <h1 className="font-oswald text-4xl">NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href={"/"}><button className="py-2 px-5 rounded-2xl text-black font-semibold cursor-pointer bg-[#CCFF00]">Go to workouts</button></Link>
                        </div>
                    ) : (
                        savedPlan.map(cardData => <SelectedCard key={cardData.id} cardData={cardData} />)
                    ))
                }
            </div>
        </div>
    );
};

export default MyPlanSection;