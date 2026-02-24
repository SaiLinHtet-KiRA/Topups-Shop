import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Fire } from "../../svg";
import GameCard from "../Card/GameCard";
import { useGetGamesQuery } from "@/redux/api/game";

import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";
import CardLoader from "../ui/loader/GameCardLoader";

export default function PopularGameSection() {
  const { data, isLoading } = useGetGamesQuery({ page: 1, limit: 8 });
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
          {isLoading &&
            Array(8)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <CardLoader />
                </SwiperSlide>
              ))}
          {data &&
            data.map(({ _id, ...game }) => (
              <SwiperSlide key={game.name}>
                <GameCard _id={"games/" + _id} {...game} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
}
