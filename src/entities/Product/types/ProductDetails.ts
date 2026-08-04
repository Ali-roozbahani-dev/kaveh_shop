import {
  SingleCategory,  
} from "@/entities/Category/types/Category";
import { Brand } from "./Brand";

export interface ProductDetails {
  id: number;
  name: string;
  slug: string;
  description: string;
  brand: Brand;
  category: SingleCategory;
  images: ProductImage[];
  attributes: ProductAttribute[];
  variants: ProductVariant[];
}

export interface ProductImage {
  id: number;
  image: string;
  alt_text: string;
  is_primary: boolean;
}

export interface ProductAttribute {
  id: number;
  attribute: Attribute;
  value: string;
}

export interface Attribute {
  id: number;
  name: string;
  description: string;
}

export interface ProductVariant {
  id: number;
  sku: string;
  price: number;
  discount_amount: number;
  final_price: number;
  stock: number;
  has_stock: boolean;
  images: ProductImage[];
  attributes: VariantAttribute[];
}

export interface VariantAttribute {
  id: number;
  attribute: Attribute;
  value: string;
}
