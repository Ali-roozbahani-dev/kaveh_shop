import { Minus, Plus } from "lucide-react";
import RemoveBtn from "./RemoveBtn";



export default function QuantitySelector(){

    return (
        <div className="border w-30 flex rounded-sm overflow-hidden">
            <button className="w-1/3 flex-center py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100">
                <Plus strokeWidth={1.8} className="size-4"/>
            </button>
            <span className="font-semibold w-1/3 flex-center">{"1"}</span>
            <div className="w-1/3 flex-center py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100">
                <RemoveBtn />
            </div>
            {/* <button className="w-1/3 flex-center py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100">            
                <Minus strokeWidth={1.8} className="size-4"/>
            </button> */}
        </div>
    )
}