"use client"

import { IData } from "@/lib/Type";
import React, { createContext, useState } from "react";

interface ContextType {
    todaysPlan: IData[],
    setTodaysPlan: React.Dispatch<React.SetStateAction<IData[]>>,
    savedPlan: IData[],
    setSavedPlan: React.Dispatch<React.SetStateAction<IData[]>>
}

export const ExcerciseContext = createContext<ContextType>({
    todaysPlan: [],
    setTodaysPlan: () => { },
    savedPlan: [],
    setSavedPlan: () => { }
});

const ExcerciseProvider = ({ children }: { children: React.ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<IData[]>([])
    const [savedPlan, setSavedPlan] = useState<IData[]>([])
    return (
        <ExcerciseContext.Provider value={{ todaysPlan, setTodaysPlan, savedPlan, setSavedPlan }}>
            {children}
        </ExcerciseContext.Provider>
    );
};

export default ExcerciseProvider;