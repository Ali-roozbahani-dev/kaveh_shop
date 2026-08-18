"use client";
import { Badge } from "@/components/ui/badge";
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function CartLink() {
  const {data: cart , isPending , error} = useGetCart();
  
  
  console.log("error:", error);

  
  if(error) throw new Error("خطایی رخ داد");


  return (
    <Link
      href={"/"}
      className="relative block text-theme-4 lg:bg-theme-4 lg:text-white rounded-md  
        py-1.5 px-2 lg:py-2.5 lg:px-4 hover:opacity-85"
    >
      {!isPending &&
      <Badge
        className="rounded-full bg-theme-2 lg:bg-white lg:text-theme-4 
            h-4.5 w-4.5 lg:h-5 lg:w-5 pt-1 absolute -top-1 -right-1 lg:top-0.75 lg:right-1"
      >
        {cart.items.length}
      </Badge>
      }
      <FaCartShopping className="inline-block text-[28px] lg:text-[25px] lg:me-2 mt-1" />
      <span className="hidden lg:inline-block">سبد خرید</span>
    </Link>
  );
}
