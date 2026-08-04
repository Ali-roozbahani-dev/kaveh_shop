import Image from "next/image";


export default function EmptyProductList({className}: {className: string}){

    return (
        <div className={className}>
            <Image 
            src={"/emptyProducts.png"} 
            width={1254} 
            height={1254} 
            className="w-full h-auto" 
            alt="تصویر خالی"
            />
        </div>
    )
}