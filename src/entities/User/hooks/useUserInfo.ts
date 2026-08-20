import { useQuery } from "@tanstack/react-query";
import getUserInfo from "../api/getUserInfo";


export function useUserInfo(){
    return useQuery({
        queryKey: ["user"],
        queryFn: getUserInfo,
        staleTime: Infinity,
        gcTime: Infinity
    })
}