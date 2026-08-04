import Image from "next/image";
import QuantitySelector from "./QuantitySelector";


export default function CartItem(){

    return(
        <div className="flex flex-wrap justify-between not-last:border-b not-last:pb-4 not-first:pt-4">
        
            <div className="flex">
                <div className="w-25 lg:w-35 xl:w-40">
                    <Image 
                    src={"/search-result.webp"}
                    alt="تصویر محصول"
                    width={1000}
                    height={1000}
                    className="w-full"
                    />
                </div>
                <div className="ps-2">
                    <span 
                    className="font-semibold text-[13px] md:text-[14px] w-full">
                        سرخ کن بدون روغن فلیپس مدل hd36648
                    </span>
                    <div className="flex border p-1 w-max rounded-sm mt-3">
                        <span className="text-[12px] md:text-[13px]">مشکی</span>
                        <div className="border rounded-sm bg-black w-5 h-5 ms-2"/>
                    </div>
                </div>
            </div>
            


            <div className="flex items-end w-full lg:w-auto lg:flex-col justify-between mt-4 lg:mt-0">
                <div className="lg:order-last">
                    <QuantitySelector />
                </div>
                <div>
                    <span className="font-semibold text-[15px] md:text-[16px] me-1">{"14500000"}</span>
                    <span className="text-[12px] md:text-[13px]">تومان</span>
                </div>
            </div>
        </div>
    )
}