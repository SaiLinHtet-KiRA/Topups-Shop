import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Fire } from "../../svg";
import GameCard from "../Card/GameCard";

import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";
import { useGetGamesQuery } from "@/redux/api/game";

export default function PopularGameSection() {
  const { data } = useGetGamesQuery({ start: 1, limit: 8 });
  console.log(data);
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
          {data?.map((game) => (
            <SwiperSlide key={game.name}>
              <GameCard {...game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
