import { HomeData } from "../types/homeDataTypes";



export const getHomeData = async (): Promise<HomeData>=>{
    const domain = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${domain}/api/home/`,{
        next: {
            revalidate: 60 * 60 * 2
        }
    });

    if (!res.ok) {
        throw new Error("خطایی رخ داد.");
    }

    

    return res.json();
}

