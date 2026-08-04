import { ProductListItem } from "./ProductListItem";


export interface BrandOption {
    brand__name : string;
    brand__slug: string;
    count: number;
}

export interface CategoryOption {
    category__name : string;
    category__slug: string;
    count: number;
}

export interface Facets {
    categories: CategoryOption[];
    brands: BrandOption[];
    price: {
        min: number;
        max: number;
    }    
}


export interface TproductList{
    count: number;
    next: null;
    previous: null;
    results: ProductListItem[];
    facets: Facets; 
}