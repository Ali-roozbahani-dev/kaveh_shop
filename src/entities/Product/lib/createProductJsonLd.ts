import { ProductDetails } from "../types";


export function createProductJsonLd(product: ProductDetails) {

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.image),
    description: product.description,
    brand: {
        "@type": "Brand",
        name: product.brand.name,
    },
    sku: product.variants[0].sku,
    offers: {
        "@type": "Offer",
        priceCurrency: "IRR",
        price: product.variants[0].price,
        availability:
        product.variants[0].stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
    },
    };
}