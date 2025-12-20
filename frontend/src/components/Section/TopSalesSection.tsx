import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "./TopSalesSection.css";
import { AwardRibbon, BankNote, Box } from "../../svg";
import numberToText from "../../helper/numberToText";

export default function TopSalesSection() {
  const data = {
    package_name: "Diamond 10x10",
    image: "/MLBB/dia-lg.webp",
    price: 10000,
    sold: 1100,
    game: { name: "Mobile Legend Bang Bang", icon: "/MLBB/icon.webp" },
  };

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
          {Array(10)
            .fill(0)
            .map(() => (
              <SwiperSlide>
                <div className="top-sales-card">
                  <div className="top-sales-image">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="top-sales-info">
                    <header>{data.package_name}</header>
                    <div className="top-sales-badge-wrapper">
                      <span className="top-sales-badge">
                        <BankNote className="svg" />
                        {data.price.toLocaleString()} MMK
                      </span>
                      <span className="top-sales-badge">
                        <Box className="svg" />
                        {numberToText(data.sold)}
                      </span>
                    </div>
                    <div className="game-badge">
                      <span className="">
                        <img src={data.game.icon} alt="" />
                      </span>
                      <header className="">{data.game.name}</header>
                    </div>
                    <button className="topup-btn">Top Up</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
}
