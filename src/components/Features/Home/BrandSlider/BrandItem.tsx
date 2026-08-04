import { Tbrand } from "@/entities/Product/types";
import Image from "next/image";
import Link from "next/link";



export default function BrandItem({brand}: {brand: Tbrand}){



    return (
        <Link href={`/brand/${brand.slug}`} className="block  rounded-lg border   w-full">
            <div className="">
                <Image 
                src={brand.logo}
                width={1990}
                height={2500}
                alt={`${brand.name} logo`}
                className="w-full max-h-22 mx-auto"
                />
            </div>
            <p className="text-center font-bold mt-5 text-[12px] lg:text-[14px] pb-4">{brand.name}</p>
        </Link>
    )
}