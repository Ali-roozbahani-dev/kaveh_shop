"use client";
import { Menu} from "lucide-react";
import { useEffect, useState } from "react";
import Categories from "../Categories/Desktop/Categories";
import { TCategoriesGroup } from "../Categories/utils/categorizeCategories";
import StaticNavbarItems from "../NavbarHeader/StaticNavbarItems";
import { usePathname } from "next/navigation";

export default function DesktopNavbar({categoriesGroup,}:{categoriesGroup: TCategoriesGroup;}) {
  const [scrolled, setScrolled] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowCategories(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrolled) {
    return null;
  }

  return (
    <>
      <div className="container-0">
        <nav className="flex justify-between items-center">
          <ul className="flex items-center text-[14px] flex-1">
            <li
              className="mx-5 relative flex-center cursor-default hover:text-theme-hover py-3"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <Menu className="me-1 h-5 w-5" />
              <span className="font-bold">دسته بندی ها</span>
              {showCategories && (
                <Categories categoriesGroup={categoriesGroup} />
              )}
            </li>
            <StaticNavbarItems />            
          </ul>
        </nav>
      </div>
    </>
  );
}
