import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { ReviewsResponse } from "../types/review";


async function fetchReviews(page: number): Promise<ReviewsResponse> {
  const response = await axios.get<ReviewsResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reviews/`,
    {
      params: {
        page,
      },
    }
  );

  return response.data;
}

export function useGetReviews() {
  return useInfiniteQuery({
    queryKey: ["reviews"],

    queryFn: ({ pageParam }) => fetchReviews(pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    },
  });
}