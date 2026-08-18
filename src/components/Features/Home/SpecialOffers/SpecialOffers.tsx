"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import HomePageProductCard  from "@/components/ui/Product/Cards/HomePageProductCard";
import { ProductListItem } from "@/entities/Product/types"


export default function SpecialOffers({products}: {products: ProductListItem[]}) {

  
  return (
    <div className="my-10">
      <div className="flex justify-between items-center py-2.5">
        <h1 className="font-bold text-[15px] lg:text-[18px]">
          پیشنهاد های ویژه
        </h1>
        <Link href={"/"} className="text-theme-4 text-[14px] lg:text-[17px]">
          <span className="font-bold">مشاهده همه</span>
          <FaChevronLeft className="inline-block ms-2" />
        </Link>
      </div>
      <Swiper
        spaceBetween={25}
        breakpoints={{
          400: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 5.2 },
        }}
      >
        {products.map((pro)=>(

        <SwiperSlide key={pro.id}>
          <HomePageProductCard product={pro}/>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}
