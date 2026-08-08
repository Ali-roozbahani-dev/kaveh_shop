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
  const {path}= initialCategory;
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
          {initialCategory.path.map((item , i) => (            
            <React.Fragment key={item.slug}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              {initialCategory.path.length === i + 1 ?
                <BreadcrumbPage className="text-[13px] lg:text-[14px]">
                  {item.name}
                </BreadcrumbPage>
                :
                <BreadcrumbLink href={`/category/${item.slug}`} className="text-[13px] lg:text-[14px]">
                  {item.name}
                </BreadcrumbLink>
              }
              </BreadcrumbItem>              
            </React.Fragment>
          ))}          
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
