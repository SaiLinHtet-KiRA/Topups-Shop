import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Carousel.css";

export default function Carousel() {
  return (
    <Swiper
      effect={"fade"}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="Swiper"
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>
    </Swiper>
  );
}
