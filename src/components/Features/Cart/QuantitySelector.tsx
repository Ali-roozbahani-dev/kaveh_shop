"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChangeQuantity } from "@/entities/Cart/hooks/useChangeQuantity";
import { useDeleteCartItem } from "@/entities/Cart/hooks/useDeleteCartItem";


interface Props {
  itemId: number;  
  quantity: number;
  stock: number;
  className?: string;
}


export default function QuantitySelector({
itemId , 
quantity , 
stock ,
className}: Props) {

  const {changeQuantity , isChangingQuantity} = useChangeQuantity();
  const {deleteCartItem , isDeleting} = useDeleteCartItem();

  const isPending = isChangingQuantity || isDeleting;

  
  return (
    <div
      className={cn("border w-30 flex rounded-sm overflow-hidden", className)}
    >
      <button
      disabled={isPending || quantity >= stock}
      onClick={() =>
        changeQuantity({id: itemId , quantity: quantity + 1})
      }
      className="w-1/3 flex-center disabled:opacity-60 py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100"
      >
        {quantity >= stock ? (
          <span className="text-[11px] font-semibold">حداکثر</span>
        ) : (
          <Plus strokeWidth={1.8} className="size-4" />
        )}
      </button>
      <span className="font-semibold w-1/3 flex-center">
        {quantity}
      </span>

      {quantity > 1 ? (
        <button
        disabled={isPending}
        onClick={() =>
          changeQuantity({id: itemId , quantity: quantity - 1})
        }
        className="w-1/3 flex-center py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100"
        >
          <Minus strokeWidth={1.8} className="size-4" />
        </button>
      ) : (
        <button
        disabled={isPending}
        onClick={() => deleteCartItem(itemId)}
        className="w-1/3 flex-center py-1 md:py-1.5 px-0.5 md:px-1 bg-gray-100"
        >
          <Trash2 className="size-4.5" />
        </button>
      )}
    </div>
  );
}
