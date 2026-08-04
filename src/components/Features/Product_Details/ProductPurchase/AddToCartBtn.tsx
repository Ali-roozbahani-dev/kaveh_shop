import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";


export default function AddToCartBtn(){

    return(
        <Button variant={"Blue1"} className="w-full rounded-sm px-5 py-5 lg:py-6 lg:text-[16px]">
            <ShoppingCart className="hidden md:block size-5 lg:size-6"/>            
            افزودن به سبد خرید
        </Button>
    )
}