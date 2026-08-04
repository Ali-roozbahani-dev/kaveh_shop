"use client"

import { Progress } from "@/components/ui/progress"

interface Props{
  rating: number;
  count: number;
}

export default function RatingBar({rating , count}: Props) {
  


  return (
    <div className="flex items-center mb-1 gap-3">
      <span className="text-[14px] lg:text-[15px]">{rating}</span>

      <Progress indicatorClassName="bg-golden-star" value={72} className="w-70 2xl:w-80" />

      <span className="text-[12px] lg:text-[13px] text-primary-text">({count})</span>        
    </div>
  )
}
 
