"use client";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import QuantitySelector from "../../Cart/QuantitySelector";
import { ProductVariant } from "@/entities/Product/types";
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import { useAddToCart } from "@/entities/Cart/hooks/useAddToCart";

interface Props {
  selectedVariant: ProductVariant;
}

export default function AddToCartBtn({selectedVariant }: Props) {
  const { data: cart , isPending , error} = useGetCart();
  const {addToCart , isAddingToCart} = useAddToCart();

  if(isPending) return <div>loading</div>
  if(error) throw new Error("خطایی رخ داد")

  const addedVariant = cart.items.find(
    (item) => item.variant_id === selectedVariant.id
  );

  const addToCartHandler = () => {
    if (addedVariant || !selectedVariant.id) return;

    addToCart({quantity: 1 , variant : selectedVariant.id});
  };

  return (
    <>
      {addedVariant ? (
        <div
          className="w-full flex justify-between items-center border border-primary-text3 text-theme-2 
        rounded-sm px-2 py-1 lg:py-2 lg:text-[16px]"
        >
          {/* {selectedVariant.id!! && (
            <QuantitySelector
              className="ms-3 xl:ms-0 order-last xl:order-first"
              itemId={selectedVariant.id} 
              quantity={addedVariant.quantity}             
            />
          )} */}
          <Link
            href={"/cart"}
            className="border border-theme-2 font-semibold p-2 text-[12px] md:text-[13px]"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      ) : (
        <Button
          disabled={isAddingToCart}
          onClick={addToCartHandler}
          variant={"Blue1"}
          className="w-full rounded-sm px-5 py-5 lg:py-6 lg:text-[16px]"
        >
          {isAddingToCart ? (
            <Loader2 className="size-5 lg:size-6 animate-spin" />
          ) : (
            <ShoppingCart className="hidden md:block size-5 lg:size-6" />
          )}

          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
