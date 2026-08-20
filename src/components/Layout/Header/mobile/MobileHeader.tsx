"use client";
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
 

  return (
    <>
      <div className="container-0 py-3 px-2">
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
        
      </div>
    </>
  );
}
