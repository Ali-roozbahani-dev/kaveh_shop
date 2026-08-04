import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryPath, SingleCategory} from "@/entities/Category/types/Category";


interface Props { 
  path: CategoryPath[];
  productSlug: string;

}

export default function ProductBreadcrumb({path , productSlug}: Props) {
  return (
    <div>      
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[13px] lg:text-[14px]">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          
            
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-[13px] lg:text-[14px]">{"slug"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
                       
          
          <BreadcrumbItem>
            
            <BreadcrumbPage className="text-[13px] lg:text-[14px]">{"initialCategory.name"}</BreadcrumbPage>
            
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}