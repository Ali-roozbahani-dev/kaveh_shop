
import { Badge } from "@/components/ui/badge"
import {
  Card,  
  CardFooter,  
  CardTitle,
} from "@/components/ui/card"
import { ProductListItem } from "@/entities/Product/types"
import { calculateDiscount } from "@/utils/calculateDiscount"
import Image from "next/image"
import Link from "next/link"

export default function HomePageProductCard({product}: {product: ProductListItem}) {

  const discountPercentage = calculateDiscount(product.price , product.discount_amount);



  return (
    <Link href={"/"} target="_blank" className="block">
      <Card className="relative mx-auto w-full pt-0 border rounded-lg">       
          <Badge className="absolute bg-[#ee2e2e] top-2 py-3 right-2 rounded-sm">
            {discountPercentage}
            % تخفیف
          </Badge>
          
          <Image
          src={`/product/${product.slug}`}
          width={2000}
          height={2000}
          alt={product.name}
          className="w-full h-auto"          
        />        
          
        <CardTitle className="text-center font-vazir px-3 text-[15px] lg:text-[16px]">
          {product.name}          
        </CardTitle>
        <CardFooter className="font-bold justify-between w-full mx-auto px-3 border-0">
          <div className="text-primary-text text-[13px] xl:text-[14px]">
            <span className="line-through pe-1">{product.price}</span>
            <span>تومان</span>
          </div>
          <span className="text-[15px] xl:text-[17px]">{product.final_price}</span>
        </CardFooter>
              
      </Card>
    </Link>
  )
}