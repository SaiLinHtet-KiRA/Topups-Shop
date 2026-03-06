import ListItemLink from "@/components/Navgiation/ListItemLink";
import Carousel from "../components/Carousel/Carousel";
import PopularGameSection from "../components/Section/PopularGameSection";
import TopSalesSection from "../components/Section/TopSalesSection";

export default function Home() {
  return (
    <>
      <Carousel />
      <ListItemLink />
      <PopularGameSection />
      <TopSalesSection />
    </>
  );
}
