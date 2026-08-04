"use client"
import { Heart } from "lucide-react";
import { useState } from "react";


export default function AddToFavorite(){
    const [isAdded , setIsAdded] = useState(false);
    

    return (
        <button 
        onClick={()=> setIsAdded(!isAdded)} 
        className="me-4">
            <Heart className={`${isAdded ? "fill-red-600 text-red-600" : ""} size-5.5 md:size-6.5`}/>
        </button>
    )
}