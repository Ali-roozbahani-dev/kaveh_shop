"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface Tprops{
    secondsLeft: number;
    setSecondsLeft: Dispatch<SetStateAction<number>>;        
}

export default function CountDown({secondsLeft, setSecondsLeft}: Tprops) {
    

    useEffect(() => {
        if (secondsLeft <= 0) return

        const interval = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)

        return () => clearInterval(interval)
    }, [secondsLeft])

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    return (
        <div className="flex-center mt-6">
            <p className="text-primary-text text-[12px] md:text-[13px]"> ارسال مجدد کد تا </p>
            <span className="block ms-1.5 font-bold text-theme-4 text-[13px] md:text-[14px]">
                {formattedTime}
            </span>
        </div>
    )
}