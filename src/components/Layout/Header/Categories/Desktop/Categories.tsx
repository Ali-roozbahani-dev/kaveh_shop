import ParentsList from "./ParentsList";
import { TCategoriesGroup } from "../utils/categorizeCategories";


export default function Categories({categoriesGroup}:{categoriesGroup:TCategoriesGroup}) {


  return (
    <>
      <div className="border shadow-[0_5px_10px_3px_#e1e3e3]  p-4
      w-max absolute rounded-b-md z-49 top-full right-0 bg-white">      
        <ParentsList 
        parents={categoriesGroup.parents}
        children={categoriesGroup.children}
        />        
      </div>
    </>
  );
}
