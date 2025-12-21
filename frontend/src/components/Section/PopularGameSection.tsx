import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Games from "../../data/Games";
import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";
import { Fire } from "../../svg";

export default function PopularGameSection() {
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
          {Games.map((game) => (
            <SwiperSlide>
              <div className="game-card">
                <img src={game.icon} alt={game.name} />
                <div>
                  <span>
                    <h1>{game.name}</h1>
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
