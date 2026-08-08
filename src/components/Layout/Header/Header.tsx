import { getAllCategories } from "@/entities/Category/api/getAllCategories";
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";
import { categorizeCategories } from "./Categories/utils/categorizeCategories";

export default async function Header() {
  const categories = await getAllCategories();
  const categoriesGroup = categorizeCategories(categories);


  return (
    <header className="mb-4 sticky top-0 z-49 bg-white border-b px-3 lg:px-7">
      <div className="hidden lg:block">
        <DesktopHeader categoriesGroup={categoriesGroup} />
      </div>

      <div className="lg:hidden">
        <MobileHeader categoriesGroup={categoriesGroup} />
      </div>
    </header>
  );
}
