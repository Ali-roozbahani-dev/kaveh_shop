"use client"

import { useProductStore } from "@/stores/product_store";
import { ProductVariant } from "../../types";

interface Props{    
    variant: ProductVariant;
}

export default function ColorItem({variant}: Props){
    const setVariant = useProductStore((store)=> store.setVariant);

    // فعال variant پیدا کردن  
    const selectedVariantId = useProductStore((store)=> store.selectedVariantId);
    const isActive = selectedVariantId === variant.id;

    // variant پیدا کردن رنگ 
    const colorAttribute = variant.attributes.find((att)=> att.attribute_value.attribute === "color");
    if(!colorAttribute) return null;

    // استخراج کد رنگ
    const color_code = colorAttribute.attribute_value.properties.code;
    if(typeof color_code != "string") return null;


    return (                   
        <button 
        onClick={()=> setVariant(variant.id)}
        className={`${isActive ? " border-2 border-theme font-semibold p-0.75" : "border"} 
        flex items-center me-3  cursor-pointer 
        rounded-sm w-8 lg:w-9 h-8 lg:h-9`}>
            <div 
            style={{
                background: color_code
            }}
            className=" border w-full h-full rounded-sm"></div>          
        </button> 
        
    )
}