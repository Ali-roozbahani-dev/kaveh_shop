import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface VerifyOtpParams {
    phone_number: string;
    callbackUrl?: string;
}

export function useVerifyOtp({ phone_number , callbackUrl}: VerifyOtpParams) {
    const router = useRouter();
    
    const verifyOtpMutation = useMutation({
        mutationFn: async (otp: string) => {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;

            await axios.post(
                `${API_URL}/api/user/auth/verify-otp/`,
                {
                    phone_number,
                    otp,
                }
            );
        },

        onSuccess: () => {
            toast.success("ورود با موفقیت");
            router.push(callbackUrl ?? "/")
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.detail ?? "کد وارد شده صحیح نیست"
                );
            } else {
                toast.error("خطایی رخ داد");
            }
        },
    });

    return {
        verifyOtpMutation: verifyOtpMutation.mutate,
        isVerifyingOtp: verifyOtpMutation.isPending,
    };
}