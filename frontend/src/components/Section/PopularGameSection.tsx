import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Fire } from "../../svg";
import { games } from "../../data/games";
import GameCard from "../GameCard";

import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";

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
          {games.map((game) => (
            <SwiperSlide key={game.name}>
              <GameCard {...game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
