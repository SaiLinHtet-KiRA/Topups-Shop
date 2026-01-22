import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ArrowRightCircle, AwardRibbon, BankNote, Box } from "../../svg";
import numberToText from "../../helper/numberToText";

import "swiper/css";
import "swiper/css/free-mode";
import "./TopSalesSection.css";
import { useGetPackagesQuery } from "@/redux/api/package";

export default function TopSalesSection() {
  const { data } = useGetPackagesQuery({ start: 1, limit: 10 });

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
          {data?.map(({ icon, name, game, new_price, sold }) => (
            <SwiperSlide>
              <div className="top-sales-card">
                <div className="top-sales-image">
                  <img src={icon} alt="" />
                </div>
                <div className="top-sales-info">
                  <header>{name}</header>
                  <div className="top-sales-badge-wrapper">
                    <span className="top-sales-badge">
                      <BankNote className="svg" />
                      {new_price.toLocaleString()} MMK
                    </span>
                    <span className="top-sales-badge">
                      <Box className="svg" />
                      {numberToText(sold)}
                    </span>
                  </div>
                  <div className="game-badge">
                    <span className="">
                      <img src={game.icon} alt="" />
                    </span>
                    <header className="">{game.name}</header>
                  </div>
                  <button className="topup-btn">
                    Top Up
                    <ArrowRightCircle className="svg" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
