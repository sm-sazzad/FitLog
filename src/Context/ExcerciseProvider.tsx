"use client"

import { IData } from "@/lib/Type";
import React, { createContext, useState } from "react";

interface ContextType {
    todaysPlan: IData[],
    setTodaysPlan: React.Dispatch<React.SetStateAction<IData[]>>,
    savedPlan: IData[],
    setSavedPlan: React.Dispatch<React.SetStateAction<IData[]>>
    btnType: string,
    setBtnType: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>
}

export const ExcerciseContext = createContext<ContextType>({
    todaysPlan: [],
    setTodaysPlan: () => { },
    savedPlan: [],
    setSavedPlan: () => { },
    btnType: 'plan',
    setBtnType: () => { }
});

const ExcerciseProvider = ({ children }: { children: React.ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<IData[]>([])
    const [savedPlan, setSavedPlan] = useState<IData[]>([])
    const [btnType, setBtnType] = useState<'plan' | 'saved'>('plan')
    return (
        <ExcerciseContext.Provider value={{ todaysPlan, setTodaysPlan, savedPlan, setSavedPlan, btnType, setBtnType }}>
            {children}
        </ExcerciseContext.Provider>
    );
};

export default ExcerciseProvider;