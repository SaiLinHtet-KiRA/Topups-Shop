import type Game from "@/interface/Game";
import Breadcrumbs from "../Navgiation/Breadcrumbs";
import CheckIdSection from "../Section/CheckIdSection";
import PackageSection from "../Section/PackageSection";
import "./GameInfoContainer.css";
import SelectPayment from "../Section/SelectPaymentSection";
import { useSearchParams } from "react-router";
import { useCreateTopupMutation } from "@/redux/api/topup";

export default function GameInfoContainer({
  _id,
  name,
  about,
  appStore,
  packages,
  icon,
  palyStore,
  check_id,
}: Game) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const [createTopup] = useCreateTopupMutation();
  return (
    <form
      className="game-info-container wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        const data = {
          game: _id,
          userId: "",
          zoneId: "",
          package: "",
        };
        getSearchParams.forEach(
          (value, params) => (data[params as keyof typeof data] = value),
        );
        createTopup(data);
        // setSearchParams("", { replace: true });
      }}
    >
      <Breadcrumbs path={["Games", name]} />
      {check_id && <CheckIdSection {...check_id} />}

      <section>
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
