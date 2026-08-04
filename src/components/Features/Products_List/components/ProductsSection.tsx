"use client";
import { useEffect, useRef, useState } from "react";
import HeaderList from "./HeaderList";
import ProductsList from "./ProductsList";
import { useProductList } from "../api/useProductList";
import { FilterForm } from "@/components/Features/Products_List/Filter/components/FilterForm";
import { FormOutput, Ordering } from "../types/TproductSection";
import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  initialBrand?: string;
  searchValue?: string;
  initialCategory?: CategoryListItem;
}

export default function ProductsSection({
  initialBrand,
  searchValue,
  initialCategory,
}: Tprops) {
  const sentinel = useRef(null);
  const [showFilter, setShowFilter] = useState(true);
  const [ordering, setOrdering] = useState<Ordering | undefined>(undefined);
  const [formQueries, setFormQueries] = useState<FormOutput>({
    category: initialCategory?.slug,
    brand: initialBrand,
    max_price: undefined,
    min_price: undefined,
    has_stock: undefined,
  });

  const {
    data,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    fetchNextPage,
  } = useProductList({
    ...formQueries,
    search: searchValue,
    ordering,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "50px",
      },
    );

    if (sentinel.current) observer.observe(sentinel.current);

    return () => observer.disconnect();
  }, [[fetchNextPage, hasNextPage, isFetchingNextPage]]);

  if (isPending) {
    return <div>loading ...</div>;
  }

  if (isError) {
    throw error;
  }

  const products = data.pages.flatMap((page) => page.results);
  const facets = data.pages[0].facets;

  return (
    <div className="flex w-full relative">
      <FilterForm
        facets={facets}
        initialCategory={initialCategory}
        setFormQueries={setFormQueries}
        showFilter={showFilter}
      />

      <div className="flex-1">
        <div className="w-full">
          <HeaderList
            initialCategory={initialCategory}
            count={products.length}
            ordering={ordering}
            setOrdering={setOrdering}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />

          <ProductsList products={products} />
          <div ref={sentinel} className="h-2 w-full"></div>
        </div>
      </div>
    </div>
  );
}
