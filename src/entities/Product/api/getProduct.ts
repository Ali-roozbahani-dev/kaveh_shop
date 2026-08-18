import { ProductDetails } from "../types/ProductDetails";


export async function getProduct(slug: string): Promise<ProductDetails> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}