import Image from "next/image";
import { CategorySliderItem } from "../types/homeDataTypes";
import Link from "next/link";

interface Props{
    category: CategorySliderItem ;    
}

export default function CategoryItem({category}: Props){


    return (
        <Link href={`/category/${category.slug}`} className="block rounded-lg border p-4  w-full">
            <div className="">
                <Image 
                src={category.image ?? "/"}
                width={1990}
                height={2500}
                alt="category image"
                className="w-13 h-auto mx-auto"
                />
            </div>
            <p className="text-center font-bold mt-5 text-[12px] lg:text-[14px]">{category.name}</p>
        </Link>
    )
}