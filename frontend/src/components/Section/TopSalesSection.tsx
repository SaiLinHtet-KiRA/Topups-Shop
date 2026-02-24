import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { AwardRibbon } from "../../svg";
import { useGetPackagesQuery } from "@/redux/api/package";
import TopSalePackageCard from "../Card/TopSalePackageCard";
import TopSalesLoading from "../ui/loading/TopSalesLoading";
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
          {isLoading && <TopSalesLoading />}
        </Swiper>
      </section>
    </section>
  );
}
