import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselProps {
  images: { logo: string; background: string; alt: string; text: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  // showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  @media screen and (max-height:900px){
  .swiper-slide{
    width:260px}
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className="w-full shadow-none">
      <style>{css}</style>
      <div className="shadow-none mx-auto w-full rounded-[24px] p-2 md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] p-2 md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="shadow-none flex w-full items-center justify-center gap-4">
            <div className="w-full shadow-none">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                //show or hide paginatioon
                // pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`cursor-none relative ${image.background} rounded-3xl flex items-center flex-col justify-center h-[200px] space-y-4`}
                    >
                      <div className="h-20 w-20 overflow-hidden rounded-3xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.5)]">
                        <img
                          className="object-contain w-full h-full"
                          src={image.logo}
                          alt={image.alt}
                        />
                      </div>

                      <div className="z-20">
                        <h1 className="text-black text-xl font-medium">
                          {image.text}
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`cursor-none relative ${image.background} rounded-3xl flex items-center flex-col justify-center h-[200px] space-y-4`}
                    >
                      <div className="h-20 w-20 overflow-hidden rounded-3xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.5)]">
                        <img
                          className="object-contain w-full h-full"
                          src={image.logo}
                          alt={image.alt}
                        />
                      </div>

                      <div className="z-20">
                        <h1 className="text-black text-xl font-medium">
                          {image.text}
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* duplicated for better looking reason.. nothing else --> basically for the infinite looking design */}
                {/* {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative rounded-3xl overflow-hidden">
                      <img
                        src={image.background}
                        width={500}
                        height={500}
                        className="size-full rounded-3xl"
                        alt={image.alt}
                      />
                      <div className="absolute inset-0 bg-black/60 z-10"></div>{" "}
                    </div>

                    <div className="absolute top-10 z-20 h-20 w-20 overflow-hidden rounded-3xl transform -translate-x-1/2 left-1/2 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.5)]">
                      <img
                        className="object-contain w-full h-full"
                        src={image.logo}
                        alt={image.alt}
                      />
                    </div>

                    <div className="absolute bottom-5 transform left-1/2 -translate-x-1/2 z-20">
                      <h1>{image.text}</h1>
                    </div>
                  </SwiperSlide>
                ))} */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
