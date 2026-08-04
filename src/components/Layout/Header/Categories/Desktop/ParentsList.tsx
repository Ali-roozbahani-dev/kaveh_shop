import Link from "next/link";
import ChildrensCategory from "./ChildrensCategory";
import { TCategoriesGroup } from "../utils/categorizeCategories";
import { useState } from "react";


export default function ParentsList({parents , children}: TCategoriesGroup){
    const [activeParent , setActiveParent] = useState(parents[2]);

    const activeChildren = children.filter((child)=> (
        child.path.includes(activeParent.slug)
    ));


    return (        
        <div className="flex">
            <div className="h-120 overflow-y-auto ltr">
                <ul className="rtl">
                    {parents.map((parent)=>(
                        <li key={parent.id}>
                            <Link 
                            target="blank"
                            onMouseEnter={() => setActiveParent(parent)}
                            href={`/category/${parent.slug}`} 
                            className="block w-50 px-3 py-4 text-[14px]
                            text-black hover:bg-white hover:text-theme">
                                <span>{parent.name}</span>
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