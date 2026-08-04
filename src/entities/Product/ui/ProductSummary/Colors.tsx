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
                <ColorItem hash="#56c785"/>
                <ColorItem hash="#f6e366"/>
            </div>



        </div>
    )
}