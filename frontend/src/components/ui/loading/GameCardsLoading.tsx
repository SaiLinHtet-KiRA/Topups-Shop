import { SwiperSlide } from "swiper/react";
import CardLoader from "../loader/GameCardLoader";

export default function GameCardsLoading() {
  return Array(8)
    .fill(0)
    .map((_, i) => (
      <SwiperSlide key={i}>
        <CardLoader />
      </SwiperSlide>
    ));
}
