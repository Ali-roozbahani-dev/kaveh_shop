import BulkDelete from "@/components/Features/Cart/components/BulkDelete";
import { CartList } from "@/components/Features/Cart/components/CartList";
import CartSummary from "@/components/Features/Cart/components/CartSummary";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Main from "@/components/Layout/Main/Main";



export default function CartPage(){
    
    return(
        <>
        <Header/>
        <Main>   
            <div className="flex justify-between">
                <div className="w-full lg:w-6/10 xl:w-7/10">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h1 className="font-semibold text-[22px] me-2 inline-block">سبد خرید</h1>
                            <span className="text-primary-text text-[13px] md:text-[14px]">({"4"}) عدد کالا</span>
                        </div> 
                        <div>
                            <BulkDelete />
                        </div>    
                    </div>
                    <CartList />
                </div>
                <div className="w-full fixed bottom-0 right-0 z-49 lg:z-auto lg:static 
                lg:w-4/10 xl:w-3/10 lg:ps-6 bg-white">
                    <CartSummary />
                </div>
            </div>
        </Main>
        <Footer />
        </>
        
    )
}