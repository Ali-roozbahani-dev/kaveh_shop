import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Param{
    phone_number: string;
    otp: string;    
}

export function useRequestOtp(){
    const router = useRouter();

    const sendOtpMutation = useMutation({
        mutationFn: async ({mobile , callbackUrl}: {mobile: string; callbackUrl?: string})=>{        
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await axios.post(`${API_URL}/api/user/auth/request-otp/`,{
            phone_number: mobile 
        }) 

        return {mobile , callbackUrl}
        },
        onSuccess: ({mobile , callbackUrl})=>{
            if(callbackUrl){
                router.push(`/Auth/LoginWithOtp?callbackUrl=${callbackUrl}&mobileNum=${mobile}`)
            }            

        },
        onError: ()=>{
        toast.error("خطا در اتصال به شبکه")
        }
    });
    

    return sendOtpMutation;
}