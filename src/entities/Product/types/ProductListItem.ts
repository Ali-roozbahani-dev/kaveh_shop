import { CategoryListItem } from "@/entities/Category/types/Category";
import { Brand } from "./Brand";

export interface ProductListItem {
  id: number;
  name: string;
  slug: string;
  brand: Brand;
  category: CategoryListItem;
  price: number;
  discount_amount: number;
  final_price: number;
  has_stock: boolean;
  image: string;
}
