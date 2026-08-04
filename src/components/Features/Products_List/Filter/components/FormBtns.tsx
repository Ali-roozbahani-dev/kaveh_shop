import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function FormBtns(){
    const {reset} = useFormContext()

    return (
        <>
        <Button variant={"Blue1"} className="w-full rounded-sm mb-3 py-5">
            اعمال فیلتر ها
        </Button>

        <Button 
        onClick={reset}
        type="button" 
        variant={"white"} 
        className="w-full  rounded-sm py-5">
            <RefreshCcw />
            <span>پاک کردن فیلتر ها</span>
        </Button>
        </>       
       
    )
}