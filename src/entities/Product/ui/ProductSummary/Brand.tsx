import Link from "next/link";
import { Brand as Tbrand } from "../../types";
import Image from "next/image";


export default function Brand({brand}: {brand: Tbrand}){
    const {name , logo , slug} = brand;

    return (
        <div className="my-1 flex items-center justify-between">      
        <Link  
        href={`/brand/${slug}`} 
        className="text-blue-500 font-semibold text-[18px]"
        >
            <span className="text-[15px]">{name}</span>                 
                    
        </Link>
        {logo.length &&
        <Image 
        src={logo} 
        width={500} 
        height={500} 
        alt={`${name} image`}
        className="w-30"
        />       
        }                
        </div>
    )
}