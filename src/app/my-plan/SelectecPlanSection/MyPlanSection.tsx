"use client";
import { ExcerciseContext } from "@/Context/ExcerciseProvider";
import { useContext, useState } from "react";
import SelectedCard from "./SelectedCard";
import Link from "next/link";

const MyPlanSection = () => {
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan, btnType, setBtnType } = useContext(ExcerciseContext)
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
                <div>
                    Sort by
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
                                todaysPlan.map(cardData => <SelectedCard key={cardData.id} cardData={cardData} btnType={btnType} />)
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
                            savedPlan.map(cardData => <SelectedCard key={cardData.id} cardData={cardData} btnType={btnType} />)
                        }
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyPlanSection;