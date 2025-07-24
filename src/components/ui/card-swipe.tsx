import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface CarouselProps {
  images: { logo: string; background: string; alt: string; text: string }[];
  autoplayDelay?: number;
  slideShadows: boolean;
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
  .swiper {
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  `;
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto  max-w-4xl rounded-[24px] p-2 md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] p-2 md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                className="relative"
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-5 relative h-[400px] w-[300px]">
                      <div className="shadow-[0px_0px_10px_5px_rgba(255,255,255,0.5)] relative rounded-3xl overflow-hidden h-full w-full">
                        <img
                          src={image.background}
                          className="size-full rounded-xl blur-xs"
                          alt={image.alt}
                        />
                      </div>

                      <div className="absolute z-10 top-20 h-32 w-32 overflow-hidden rounded-3xl transform -translate-x-1/2 left-1/2 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.5)]">
                        <img
                          className=" object-contain w-full h-full"
                          src={image.logo}
                          alt={image.alt}
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-10 z-30 transform left-1/2 -translate-x-1/2">
                      <h1>{image.text}</h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
