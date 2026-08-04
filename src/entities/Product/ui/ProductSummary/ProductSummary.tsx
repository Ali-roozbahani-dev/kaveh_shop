import Colors from "./Colors";
import Brand from "./Brand";
import Rating from "./Rating";
import MainProperties from "./MainProperties";
import { ProductAttribute, ProductVariant, Brand as Tbrand } from "../../types";
import AddToFavorite from "@/components/Features/Product_Details/AddToFavorite";
import { ShareProduct } from "@/components/Features/Product_Details/ShareProduct";

interface Props {
  variants: ProductVariant[];
  name: string;
  brand: Tbrand;
  attributes: ProductAttribute[];
}

export default function ProductSummary({
  variants,
  name,
  brand,
  attributes,
}: Props) {
  return (
    <div className="w-full mt-5 md:mt-0 md:p-3 lg:p-5">
      <div className="mb-4 flex justify-end items-center xl:hidden">
        <div className="flex-center text-primary-text2">
          <AddToFavorite />
          <ShareProduct title="name" />
        </div>
      </div>
      <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[20px] lg:border-b lg:pb-5">
        {name}
      </h1>
      <Brand brand={brand} />
      <Rating />
      <MainProperties attributes={attributes} />
      <Colors variants={variants} />
    </div>
  );
}
