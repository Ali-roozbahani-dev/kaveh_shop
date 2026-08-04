import { Button } from "@/components/ui/button";
import { Loader, RotateCcw } from "lucide-react";

interface Tprops{
   handler?:({ mobile }: {mobile: string;}) => void;      
   isPending: boolean;
   resend?: boolean; 
   mobile?: string;    
}


export default function RequestOtpBtn({mobile , handler , resend, isPending }: Tprops) {

  return (
    <Button  
      onClick={mobile && handler ? () => handler({mobile}) : undefined}    
      disabled={isPending}
      type={resend ? "button" : "submit"}
      variant={"Blue1"}
      className={`w-full py-5 rounded-sm text-[13px] md:text-[14px] ${resend ? "mb-3 mt-5" : ""}`}
    >
      {isPending ? (
        <Loader className="animate-spin size-5" />
      ) : resend ? (
        <>
          ارسال مجدد کد
          <RotateCcw className="size-4.5 md:size-5.5" />
        </>
      ) : (
        "ارسال کد یکبار مصرف"
      )}
    </Button>
  );
}