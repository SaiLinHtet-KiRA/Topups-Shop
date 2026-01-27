import type Game from "@/interface/Game";
import Breadcrumbs from "../Navgiation/Breadcrumbs";
import CheckIdSection from "../Section/CheckIdSection";
import PackageSection from "../Section/PackageSection";
import "./GameInfoContainer.css";
import SelectPayment from "../Section/SelectPaymentSection";
import { useSearchParams } from "react-router";

export default function GameInfoContainer({
  name,
  about,
  appStore,
  packages,
  icon,
  palyStore,
  check_id,
}: Game) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  return (
    <form
      className="game-info-container"
      onSubmit={(e) => {
        e.preventDefault();
        const body = {
          userID: "",
          zoneID: "",
          package: "",
        };
        getSearchParams.forEach(
          (value, params) => (body[value as keyof typeof body] = params),
        );
        console.log(getSearchParams.entries());
      }}
    >
      <Breadcrumbs path={["Games", name]} />
      {check_id && <CheckIdSection />}

      <section className="">
        <header>
          <span>{check_id ? "2" : "1"}</span>
          <span>Select Package</span>
        </header>
        <section className="package-section-container">
          {packages?.map((Packages) => (
            <PackageSection {...Packages} />
          ))}
        </section>
      </section>
      <SelectPayment />
      <button className="submit-btn">Order Now</button>
    </form>
  );
}
