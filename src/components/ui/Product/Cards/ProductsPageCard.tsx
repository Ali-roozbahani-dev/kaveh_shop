import { Badge } from "@/components/ui/badge";
import { Card , CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import FooterWithDiscount from "./FooterWithDiscount";
import FooterWithoutDiscount from "./FooterWithoutDiscount";
import NoStock from "./NoStock";
import { ProductListItem } from "@/entities/Product/types";

export default function ProductsPageCard({ product }: { product: ProductListItem }) {
  const { name, image, price, discount_amount, has_stock } = product;

  return (
    <Link href={`/product/${product.slug}`} target="_blank" className="block hover:shadow-[0px_0px_5px_1px_#e3e2e2]">
      <Card className="relative mx-auto w-full pt-0 border">
        {discount_amount != 0 && (
          <Badge className="absolute bg-[#ee2e2e] top-2 py-3 right-2 rounded-sm">
            {"15"}% تخفیف
          </Badge>
        )}
        <div className="relative">
          {!has_stock && <NoStock />}
          <Image
            src={`http://127.0.0.1:8000${image}`}
            width={2000}
            height={2000}
            alt="Event cover"
            className={`w-full h-auto ${has_stock ? "" : "opacity-60"}`}            
          />
        </div>


        <CardTitle className="text-center font-vazir px-3 text-[15px] lg:text-[16px]">
          {name}
        </CardTitle>
        {discount_amount ? (
          <FooterWithDiscount />
        ) : (
          <FooterWithoutDiscount price={price} />
        )}
      </Card>
    </Link>
  );
}
