import Stars from "./Stars";



export default function Rating(){

    return (
        <div className="w-max flex items-center">
            <span className="text-[15px] md:text-[16px] self-end">{"4.6"}</span>
            <div className="mx-2">
                <Stars className=""/> 
            </div>
            <div className="text-primary-text2 text-[13px] md:text-[14px] self-end">
                <span className="pe-px">({"129"})</span>
                <span>دیدگاه</span>
            </div>          
        </div>
    )
}