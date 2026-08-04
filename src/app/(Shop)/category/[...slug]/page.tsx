import ProductsSection from "@/components/Features/Products_List/components/ProductsSection";
import { Tqueries } from "@/components/Features/Products_List/types/TproductSection";
import { productQueryKey } from "@/components/Features/Products_List/utils/productQueries";

import Main from "@/components/Layout/Main/Main";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getSingleCategory } from "@/entities/Category/api/getSingleCategory";
import { getProductsList } from "@/entities/Product/api/getProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = decodeURIComponent(slug[slug.length - 1]);

  return {
    title: `${category} | کاوه شاپ`,
    description: `خرید ${category} با بهترین قیمت`,
    openGraph: {
      title: "...",
      description: "...",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProductListPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug.length) notFound();
  const decodedSlug = decodeURIComponent([...slug].reverse()[slug.length - 1]);

  const category = await getSingleCategory(decodedSlug);

  const initialQueries: Omit<Tqueries, "page"> = {
    category: category.slug,
    ordering: undefined,
    brand: undefined,
    max_price: undefined,
    min_price: undefined,
    has_stock: undefined,
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: productQueryKey(initialQueries),
    queryFn: ({ pageParam = 1 }) =>
      getProductsList({
        ...initialQueries,
        page: pageParam,
      }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main>
        <SidebarProvider>
          <ProductsSection initialCategory={category} />
        </SidebarProvider>
      </Main>
    </HydrationBoundary>
  );
}
