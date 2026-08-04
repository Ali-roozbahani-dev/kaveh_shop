"use client"

interface Props{    
    hash: string;
}

export default function ColorItem({hash}: Props){
    const isActive = true;

    return (                   
        <div className={`${isActive ? " border-2 border-theme-4 font-semibold p-0.75" : "border"} flex items-center me-3  cursor-pointer 
        rounded-sm w-8 lg:w-9 h-8 lg:h-9`}>
            <div 
            style={{
                background: hash
            }}
            className=" border w-full h-full rounded-sm"></div>          
        </div> 
        
    )
}