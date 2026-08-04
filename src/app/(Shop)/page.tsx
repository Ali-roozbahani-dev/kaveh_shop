import { getHomeData } from "@/components/Features/Home/api/getHomeData";
import BrandSlider from "@/components/Features/Home/BrandSlider/BrandSlider";
import CategorySlider from "@/components/Features/Home/CategorySlider/CategorySlider";
import HeroSlider from "@/components/Features/Home/HeroSlider/HeroSlider";
import SpecialOffers from "@/components/Features/Home/SpecialOffers/SpecialOffers";
import Main from "@/components/Layout/Main/Main";
import TwinsBanner from "@/components/ui/Banners/TwinsBanner/TwinsBanner";




export default async function HomePage() {
  const {
    hero_slider , 
    categories, 
    brands, 
    banner, 
    discount_products} = await getHomeData();
  
  

  
  return (               
    <Main>
        <HeroSlider sliders={hero_slider[0].items}/>

        <CategorySlider categories={categories[0].items}/>

        <TwinsBanner banners={banner[0].items}/>

        {discount_products[0].items.length > 0 &&
        <SpecialOffers products={discount_products[0].items}/> 
        }

        <BrandSlider brands={brands[0].items}/>         
    </Main> 
  );
}
