"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Field } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import CountDown from "./CountDown"
import VerifyOtpBtn from "./VerifyOtpBtn"
import EditNumLink from "./EditNumLink"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { otpSchema } from "../schema/otpSchema"
import RequestOtpBtn from "./RequestOtpBtn"
import { useRequestOtp } from "../hooks/useRequestOtp"
import { loginSchema } from "../schema/loginSchema"


export default function OtpForm() {
 const phone_number = "";
 const {mutate} = useRequestOtp()
 const [secondsLeft, setSecondsLeft] = useState(2 * 60); 
 const [otp, setOtp] = useState(""); 

 const sendOtpMutation = useMutation({
  mutationFn: async (otp: string)=>{
    const domaim = process.env.NEXT_PUBLIC_API_URL;
    await axios.post(`${domaim}/api/user/auth/verify-otp/`,{
      phone_number,
      otp
    })
  },
  onSuccess: ()=>{
    toast.success("ورود با موفقیت")
  },
  onError: (err)=>{
    toast.error(err.message)
  }
 })

 const sendOtpHandler = (otp: string)=>{
  const validation = otpSchema.safeParse({otp});

  if(!validation.success) return;

  sendOtpMutation.mutate(otp);
 } 

 const requestOtpMutation = ({mobile}: {mobile: string})=>{
    const validation = loginSchema.safeParse({
        mobile
      });
      
      if (!validation.success) return;
      
    mutate({mobile})              
  } 



  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      sendOtpHandler(otp);
    }}>
    <Field className="w-fit ltr mx-auto">      
      <InputOTP 
      id="digits-only" 
      maxLength={6} 
      value={otp}
      onChange={(value)=> setOtp(value)}
      pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={1} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={2} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={3} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={4} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
          <InputOTPSlot index={5} className="data-[active=true]:ring-outline-input data-[active=true]:border-theme-4 mx-1 h-13 w-10 border rounded-md"/>
        </InputOTPGroup>
      </InputOTP>
    </Field>

    <CountDown secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft}/>
    {secondsLeft === 0 ?
    <RequestOtpBtn handler={requestOtpMutation} resend={true} isPending={false}/>
    :
    <VerifyOtpBtn />
    }
    <EditNumLink />
    </form>
  )
}
