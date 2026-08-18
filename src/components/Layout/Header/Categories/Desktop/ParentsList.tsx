import Link from "next/link";
import ChildrensCategory from "./ChildrensCategory";
import { TCategoriesGroup } from "../utils/categorizeCategories";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import styles from "./desktopCategory.module.css"


export default function ParentsList({parents , children}: TCategoriesGroup){
    const [activeParent , setActiveParent] = useState(parents[2]);


    const activeChildren = children.filter((child) =>
        child.path.some((item) => item.slug === activeParent.slug)
    );


    return (        
        <div className="flex">
            <div className={`${styles.category_scroll} h-120 overflow-y-auto ltr`}>
                <ul className="rtl pe-3 min-w-65">
                    {parents.map((parent)=>(
                        <li key={parent.id}>
                            <Link 
                            target="blank"
                            onMouseEnter={() => setActiveParent(parent)}
                            href={`/category/${parent.slug}`} 
                            className="group w-full flex justify-between items-center rounded-sm ps-3 
                            pe-1 py-4 text-[14px] text-black hover:bg-theme-2 hover:font-semibold hover:text-white">
                                <span className="text-[15px]">{parent.name}</span>
                                <ChevronLeft strokeWidth={3} className="opacity-0 group-hover:opacity-100 size-5"/>
                            </Link>                        
                        </li>
                    ))}
                </ul>
            </div>

            <ChildrensCategory 
            activeParent={activeParent}  
            activeChildren={activeChildren}
            />
        </div>        
    )
}