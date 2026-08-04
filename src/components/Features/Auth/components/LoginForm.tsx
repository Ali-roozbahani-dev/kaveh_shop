"use client"
import { useState } from "react"
import { loginSchema } from "../schema/loginSchema";
import FieldError from "../../../ui/Error/FieldError";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import RequestOtpBtn from "./RequestOtpBtn";
import { useRequestOtp } from "../hooks/useRequestOtp";

interface Tprops{
  callbackUrl: string;  
}

export function LoginForm({callbackUrl}: Tprops) {
    const [mobile , setMobile] = useState("");
    const [validationError , setValidationError] = useState("");
    const {mutate , isPending} = useRequestOtp();

    
    
    
    const requestOtpMutation = ({mobile}: {mobile: string})=>{
      const validation = loginSchema.safeParse({
          mobile,
        });
        
        if (!validation.success) {        
          setValidationError(validation.error.issues[0]?.message);
          return;
        }
      mutate({mobile , callbackUrl})              
    }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      requestOtpMutation({mobile})
      }}>
        <Label 
        htmlFor="mobile" 
        className="my-2 text-[12px] md:text-[13px] text-primary-text">
          شماره موبایل خود را وارد کنید 
        </Label>
        <InputGroup className={`ltr py-5 mb-3 rounded-sm 
        has-[[data-slot=input-group-control]:focus-visible]:ring-outline-input
        has-[[data-slot=input-group-control]:focus-visible]:border-theme-4
        has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0
        focus-within:ring-0
        ${validationError.length > 0 ? "border-red-600" : ""}`}>
          <InputGroupInput 
          value={mobile}
          onChange={(e)=>{ 
            setValidationError("")
            setMobile(e.target.value)
          }}
          id="mobile" 
          type="text" 
          className="focus-within:outline-0 text-[13px] md:text-[14px]"        
            
          />
          <InputGroupAddon>
            <div className="text-black text-[13px] md:text-[14px]">+98</div>
            <div className="h-6 w-px mx-2 md:mx-5 bg-[#e3e3e3]"></div>
          </InputGroupAddon>          
        </InputGroup>
        
        {validationError.length > 0 && <FieldError message={validationError}/>}
        <RequestOtpBtn isPending={isPending}/>
    </form>
  )
}
