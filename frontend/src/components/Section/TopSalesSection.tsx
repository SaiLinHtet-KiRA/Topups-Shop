import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { AwardRibbon } from "../../svg";
import { useGetPackagesQuery } from "@/redux/api/package";
import TopSalePackageCard from "../Card/TopSalePackageCard";
import TopsaleCard from "../ui/loader/Skeleton/TopsaleCard";
import "swiper/css";
import "swiper/css/free-mode";

export default function TopSalesSection() {
  const { data, isLoading } = useGetPackagesQuery({ page: 1, limit: 10 });

  return (
    <section className="section">
      <header className="section-header">
        <span>Top Sales </span>
        <AwardRibbon className="svg-lg" />
      </header>
      <section className="section-cards-container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="section-swiper"
        >
          {data &&
            data.map((data) => (
              <SwiperSlide key={data._id}>
                <TopSalePackageCard {...data} />
              </SwiperSlide>
            ))}
          {isLoading &&
            Array(10)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={"topsale-" + i}>
                  <TopsaleCard />
                </SwiperSlide>
              ))}
        </Swiper>
      </section>
    </section>
  );
}
