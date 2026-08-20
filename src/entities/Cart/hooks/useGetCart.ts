import { useQuery } from "@tanstack/react-query";
import { Cart } from "../types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../../../api/axios_instance";


async function fetchCart(): Promise<Cart> {
  const res = await api.get<Cart>('/api/cart/')

  return res.data;
}

export function useGetCart() {
  return useQuery({
    queryKey: cartQueryKey,
    queryFn: fetchCart,
  });
}