import { CartList } from "../Cart/CartList";
import CartSummary from "../Cart/CartSummary";
import CheckoutForm from "./CheckoutForm";


export default function Checkout(){

    return (
        <div className="flex justify-between">
            <div className="w-full lg:w-6/10 xl:w-7/10 pb-32">                
                <CheckoutForm />
            </div>
            <div className="w-full fixed bottom-0 right-0 z-49 lg:z-auto lg:static 
            lg:w-4/10 xl:w-3/10 lg:ps-6 bg-white">
                <CartSummary />
            </div>
        </div>        
    )
}