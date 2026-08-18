"use client"
import { useGetCart } from "@/entities/Cart/hooks/useGetCart";
import { CartItem as TCartItem } from "@/entities/Cart/types/Cart";
import CartItem from "./CartItem";

interface Props{
  cartItems: TCartItem[];  
}

export function CartList({cartItems}: Props) {
  const {data: cart , isPending , error} = useGetCart();

  if(isPending) return <div>loading</div>;

  if(error) throw new Error("خطایی رخ داد");

  return (
    <div className="lg:border p-4 rounded-lg overflow-hidden">
      {cartItems.map((item)=>(
        <CartItem key={item.id} item={item}/>
      ))}      
    </div>
  )
}
