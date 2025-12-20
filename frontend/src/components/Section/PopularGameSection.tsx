import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";
import { Fire } from "../../svg";

export default function PopularGameSection() {
  const data = {
    name: "Mobile Legend Bang Bang",
    icon: "/MLBB/icon.webp",
  };

  return (
    <section className="section">
      <header className="section-header">
        <span>Popular Games </span>
        <Fire className="svg-lg" />
      </header>
      <section className="section-cards-container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="section-swiper"
        >
          {Array(10)
            .fill(0)
            .map(() => (
              <SwiperSlide>
                <div className="game-card">
                  <img src={data.icon} alt={data.name} />
                  <div>
                    <span>
                      <h1>{data.name}</h1>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
}
