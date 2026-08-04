"use client";
import SearchHeader from "@/components/Features/Search/components/SearchHeader";
import Logo from "../Logo";
import LoginLink from "../LoginLink";
import CartLink from "../CartLink";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { TCategoriesGroup } from "../Categories/utils/categorizeCategories";

export default function MobileHeader({
  categoriesGroup,
}: {
  categoriesGroup: TCategoriesGroup;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container-0 py-3">
        <div className="flex-between">
          <div className="flex items-center">
            <div>
              <MobileNavbar categoriesGroup={categoriesGroup} />
            </div>

            <div className="ms-2">
              <CartLink />
            </div>
          </div>

          <div className="w-25">
            <Logo />
          </div>

          <div className="flex">
            <LoginLink />
          </div>
        </div>

        {!scrolled && (
          <div className="w-full mt-3">
            <SearchHeader />
          </div>
        )}
      </div>
    </>
  );
}
