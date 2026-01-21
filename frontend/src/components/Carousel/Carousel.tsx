import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Carousel.css";

export default function Carousel() {
  const Images = ["/image/image-1.webp"];
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
      {Images.map((url, i) => (
        <SwiperSlide key={"image-" + i}>
          <div className="img-container">
            <img src={url} alt={"image-" + i} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
