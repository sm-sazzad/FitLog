import { IData } from "./Type";

export const getData = async (): Promise<IData[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}