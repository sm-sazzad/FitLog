"use client"

import { IData } from "@/lib/Type";
import React, { createContext, useEffect, useState } from "react";

interface ContextType {
    todaysPlan: IData[],
    setTodaysPlan: React.Dispatch<React.SetStateAction<IData[]>>,
    savedPlan: IData[],
    setSavedPlan: React.Dispatch<React.SetStateAction<IData[]>>
    btnType: string,
    setBtnType: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>,
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ExcerciseContext = createContext<ContextType>({
    todaysPlan: [],
    setTodaysPlan: () => { },
    savedPlan: [],
    setSavedPlan: () => { },
    btnType: 'plan',
    setBtnType: () => { },
    isOpen: false,
    setIsOpen: () => { }
});

const ExcerciseProvider = ({ children }: { children: React.ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<IData[]>([])
    const [savedPlan, setSavedPlan] = useState<IData[]>([])
    const [btnType, setBtnType] = useState<'plan' | 'saved'>('plan')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        const saveDailyPlan = localStorage.getItem('todaysPlan');
        const saveSavedPlan = localStorage.getItem('savedPlan');

        if (saveDailyPlan) {
            setTodaysPlan(JSON.parse(saveDailyPlan));
        }
        if (saveSavedPlan) {
            setSavedPlan(JSON.parse(saveSavedPlan))
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('todaysPlan', JSON.stringify(todaysPlan));
        }
    }, [todaysPlan, isLoaded]);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('savedPlan', JSON.stringify(savedPlan));
        }
    }, [savedPlan, isLoaded]);


    return (
        <ExcerciseContext.Provider value={{ todaysPlan, setTodaysPlan, savedPlan, setSavedPlan, btnType, setBtnType, isOpen, setIsOpen }}>
            {children}
        </ExcerciseContext.Provider>
    );
};

export default ExcerciseProvider;