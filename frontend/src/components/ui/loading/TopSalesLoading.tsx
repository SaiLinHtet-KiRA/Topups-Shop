import { SwiperSlide } from "swiper/react";
import TopsaleCard from "../loader/Skeleton/TopsaleCard";

export default function TopSalesLoading() {
  return Array(10)
    .fill(0)
    .map((_, i) => (
      <SwiperSlide key={"topsale-" + i}>
        <TopsaleCard />
      </SwiperSlide>
    ));
}
