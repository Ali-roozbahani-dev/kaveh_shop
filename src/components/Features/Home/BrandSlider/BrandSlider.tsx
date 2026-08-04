"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BrandItem from './BrandItem';
import { Tbrand } from '@/entities/Product/types';
interface Props{
    brands: Tbrand[];
}

export default function BrandSlider({brands}: Props) {
  return (
    <div className='my-10'>
        <Swiper
        spaceBetween={25}        
        breakpoints={{
        400: { slidesPerView: 3.2 },
        640: { slidesPerView: 4.2 },
        740: { slidesPerView: 5.2 },
        1280: { slidesPerView: 8.3 },
        }} 
        className=''
            
        >
        {brands.map((brand)=>(

        <SwiperSlide key={brand.slug}>
            <BrandItem brand={brand}/>
        </SwiperSlide>       
        ))}    

           
        </Swiper>
    </div>
  );
};