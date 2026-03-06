import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ArrowRightCircle, Fire } from "../../svg";
import GameCard from "../Card/GameCard";
import { useGetGamesQuery } from "@/redux/api/game";

import "swiper/css";
import "swiper/css/free-mode";
import "./PopularGameSection.css";
import CardLoader from "../ui/loader/GameCardLoader";
import { Link } from "react-router";

export default function PopularGameSection() {
  const { data, isLoading } = useGetGamesQuery({ page: 1, limit: 8 });
  return (
    <section className="section">
      <header className="section-header">
        <section className="section-title">
          <span>Popular Games </span>
          <Fire className="svg-sm" />
        </section>
        <aside>
          <Link to={"/games"} className="flex-center">
            All Games <ArrowRightCircle className="svg-sm" />
          </Link>
        </aside>
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
