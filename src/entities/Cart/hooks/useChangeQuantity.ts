import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Cart as Tcart } from "@/entities/Cart/types/Cart";
import { cartQueryKey } from "../queryKeys";
import { api } from "../axios_instance";


interface Params{
    id: number ;
    quantity: number;
}

export function useChangeQuantity(){
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({id , quantity}: Params): Promise<Tcart> => {
            const res = await api.patch<Tcart>(`/api/cart/items/${id}/`,
                {
                    quantity 
                }
            );
            return res.data;
        },
        onSuccess: (newCart)=>{
            queryClient.setQueryData(cartQueryKey , newCart);
        },
        onError: ()=>{
            toast.error("خطایی رخ داد");
        }
    })

    return {
        changeQuantity: mutation.mutate,
        isChangingQuantity: mutation.isPending,
    };
}