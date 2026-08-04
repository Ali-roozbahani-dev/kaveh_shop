import { ProductListItem} from "@/entities/Product/types";
import EmptyResult from "./EmptyResult";
import ProductsPageCard from "@/components/ui/Product/Cards/ProductsPageCard";


interface Tprops {
  products: ProductListItem[];
}
export default function ProductsList({ products }: Tprops) {
  return (
    products.length !== 0 ?
    <div className="flex flex-wrap p-2">
      {products.map((pro) => (
        <div key={pro.slug} className=" md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
          <ProductsPageCard product={pro} />
        </div>
      ))}
    </div>
    :
    <EmptyResult />
  );
}
