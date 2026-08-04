import { User } from "lucide-react";
import Link from "next/link";

export default function LoginLink(){

    return (
        <Link 
        href={"/Login"} 
        className="shadow rounded-md py-2 px-3
            hover:text-theme-hover flex-center h-full">
            <User className="w-6 h-6 inline-block lg:me-2"/>
            <span className="hidden lg:inline-block font-bold text-[14px]">ورود / ثبت نام</span>
        </Link>
    )
}