export interface ApiCartItem {
  id: number;
  variant_id: number;
  product_id: number;
  product_name: string;
  product_category: string;
  product_brand: string;
  sku: string;
  quantity: number;
  unit_price: string;
  discount_amount: string;
  final_price: string;
}

export interface ApiCart {
  id: number;
  items_count: string;
  subtotal: string;
  product_discount: string;
  coupon_discount: string;
  discount: string;
  total: string;
  items: ApiCartItem[];
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}

export type CartList = ApiCart[];