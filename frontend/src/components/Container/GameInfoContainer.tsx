import type Game from "@/interface/Game";
import Breadcrumbs from "../Navgiation/Breadcrumbs";
import CheckIdSection from "../Section/CheckIdSection";
import PackageSection from "../Section/PackageSection";
import "./GameInfoContainer.css";
import SelectPayment from "../Section/SelectPaymentSection";
import { useSearchParams } from "react-router";
import { useCreateTopupMutation } from "@/redux/api/topup";
import Warining from "../ui/Warining";
import LoginSection from "../Section/LoginSection";

export default function GameInfoContainer({
  _id,
  name,

  packages,

  check_id,
  login,
}: Game) {
  const [getSearchParams, _] = useSearchParams();
  const [createTopup] = useCreateTopupMutation();

  const warining =
    "တစ်ကောင့်ကိုတစ်ခါသာဝယ်လိုရမည့် pass and itemများ ဝယ်ပြီးသားကိုထပ်ဝယ်ပါက refundမပေးပါ။";
  return (
    <form
      className="game-info-container wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        const data = {
          game: _id,
          checkId: {
            userID: getSearchParams.get("userID") || "",
            zoneID: getSearchParams.get("zoneID") || "",
            server: getSearchParams.get("server") || "",
          },
          login: {
            username: getSearchParams.get("username") || "",
            password: getSearchParams.get("password") || "",
            backupCode: getSearchParams.get("backupCode") || "",
          },
          package: getSearchParams.get("package") || "",
        };

        if (check_id && !data.checkId.server) {
          data.checkId.server = check_id?.server[0];
        }
        createTopup(data);
        // setSearchParams("", { replace: true });
      }}
    >
      <Breadcrumbs path={["Games", name]} />
      {check_id && <CheckIdSection {...check_id} />}
      {login && <LoginSection {...login} />}

      <Warining text={warining} />
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
