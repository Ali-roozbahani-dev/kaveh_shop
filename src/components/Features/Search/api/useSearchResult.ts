import { Tproduct, TproductList } from "@/entities/Product/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchResult = async (search: string): Promise<Tproduct[]> => {
  const res = await axios.get<TproductList>(
    "http://127.0.0.1:8000/api/products/",
    {
      params: {
        search,
        page: 1,
        page_size: 8,
      },
    },
  );

  return res.data.results;
};

export function useSearchResult(search: string) {
  return useQuery({
    queryKey: ["searchResult", search],
    queryFn: () => fetchResult(search),
    enabled: search.trim().length !== 0,
  });
}
