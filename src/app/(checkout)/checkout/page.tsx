import Checkout from "@/components/Features/Checkout/Checkout";
import CheckoutHeader from "@/components/Features/Checkout/CheckoutHeader";
import Main from "@/components/Layout/Main/Main";


export default function ShippingPage(){
    
    return(
        <>
        <Main>  
            <CheckoutHeader /> 
            <Checkout />            
        </Main>
        </>
        
    )
}