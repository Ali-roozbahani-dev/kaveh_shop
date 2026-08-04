import { Star } from "lucide-react";


export default function ReviewScore(){

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-[24px] lg:text-[28px]">{"4.5"}</div>
            <div className="flex mb-2 lg:mb-3">
                <Star className="mx-px size-6 lg:size-7 fill-golden-star text-golden-star" />
                <Star className="mx-px size-6 lg:size-7 fill-golden-star text-golden-star" />
                <Star className="mx-px size-6 lg:size-7 fill-golden-star text-golden-star" />
                <Star className="mx-px size-6 lg:size-7 fill-golden-star text-golden-star" />
                <Star className="mx-px size-6 lg:size-7 fill-golden-star text-golden-star" />
            </div>
            <span className="text-[13px] lg:text-[14px]">({"129"}) نظر</span>            
        </div>
    )
}