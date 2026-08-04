import ParentsList from "./ParentsList";
import { TCategoriesGroup } from "../utils/categorizeCategories";


export default function Categories({categoriesGroup}:{categoriesGroup:TCategoriesGroup}) {


  return (
    <>
      <div className="border w-max absolute z-49 top-full right-0 bg-[#e8e8e8]">      
        <ParentsList 
        parents={categoriesGroup.parents}
        children={categoriesGroup.children}
        />        
      </div>
    </>
  );
}
