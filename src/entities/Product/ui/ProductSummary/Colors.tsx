"use client"

import { ProductVariant } from "../../types";
import ColorItem from "./ColorItem";

export default function Colors({variants}: {variants: ProductVariant[]}){
    

    return (
        <div className="py-4">
            <div className=" flex items-center">
                <span className="me-2 text-[13px] lg:text-[14px] text-primary-text">رنگ :</span> 
                <span className="font-medium text-[13px] lg:text-[14px]">{"استیل ضد زنگ"}</span>
            </div>


            <div className="flex mt-3 px-1">
                {variants.map((variant)=>(                    
                    <ColorItem 
                    key={variant.id}
                    variant={variant}
                    />                
                ))}
            </div>



        </div>
    )
}