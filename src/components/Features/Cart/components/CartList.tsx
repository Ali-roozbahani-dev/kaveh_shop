import CartItem from "./CartItem";



export function CartList() {

  return (
    <div className="lg:border p-4 rounded-lg overflow-hidden">
      <CartItem />  
      <CartItem />
      <CartItem />  
    </div>
  )
}
