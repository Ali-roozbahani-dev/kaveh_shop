import SearchHeader from "@/components/Features/Search/components/SearchHeader";
import Logo from "../Logo";
import LoginLink from "../LoginLink";
import CartLink from "../CartLink";
import DesktopNavbar from "./DesktopNavbar";
import { TCategoriesGroup } from "../Categories/utils/categorizeCategories";

export default function DesktopHeader({
  categoriesGroup,
}: {
  categoriesGroup: TCategoriesGroup;
}) {
  return (
    <>
      <div className="container-0 py-3">
        <div className="flex-between pt-2">
          <div className="flex items-center flex-1">
            <div className="w-35">
              <Logo />
            </div>
            <div className="ms-5 w-130">
              <SearchHeader />
            </div>
          </div>
          <div className="flex">
            <div className="me-3">
              <LoginLink />
            </div>

            <div>
              <CartLink />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <DesktopNavbar categoriesGroup={categoriesGroup} />
      </div>
    </>
  );
}
