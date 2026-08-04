import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoryListItem } from "@/entities/Category/types/Category";
import React from "react";

interface Tprops {
  initialCategory: CategoryListItem;
}

export default function ProductsBreadCrumbs({ initialCategory }: Tprops) {
  return (
    <div>
      <h1 className="font-bold text-[20px] mb-2">{initialCategory.name}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[13px] lg:text-[14px]">
              خانه
            </BreadcrumbLink>
          </BreadcrumbItem>
          {initialCategory.path.map((slug) => (
            <React.Fragment key={slug}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-[13px] lg:text-[14px]">
                  {slug}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ))}
          <BreadcrumbItem>
            {initialCategory!! && (
              <BreadcrumbPage className="text-[13px] lg:text-[14px]">
                {initialCategory.name}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
