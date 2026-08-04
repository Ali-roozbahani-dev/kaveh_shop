import { Star } from "lucide-react";
import { PiStarFill } from "react-icons/pi";


export default function Stars({className=""} : {className?: string}){

    return (
        <div className="flex ">
            <Star className={`${className} mx-px fill-golden-star text-golden-star`}/>
            <Star className={`${className} mx-px fill-golden-star text-golden-star`}/>
            <Star className={`${className} mx-px fill-golden-star text-golden-star`}/>
            <Star className={`${className} mx-px fill-golden-star text-golden-star`}/>
            <Star className={`${className} mx-px fill-golden-star text-golden-star`}/>
        </div>        
    )
}