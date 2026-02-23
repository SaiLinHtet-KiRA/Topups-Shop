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
import ShowToast from "@/helper/ShowToast";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function GameInfoContainer({
  _id,
  name,

  packages,

  check_id,
  login,
}: Game) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const [createTopup] = useCreateTopupMutation();

  const warining =
    "တစ်ကောင့်ကိုတစ်ခါသာဝယ်လိုရမည့် pass and itemများ ဝယ်ပြီးသားကိုထပ်ဝယ်ပါက refundမပေးပါ။";
  return (
    <form
      className="game-info-container wrapper"
      onSubmit={async (e) => {
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
        try {
          const res = await createTopup(data).unwrap();
          console.log("res", res);
          ShowToast("success", "Your order is successfully placed");
          setSearchParams("", { replace: true });
        } catch (error) {
          const err = error as FetchBaseQueryError;
          if ("data" in err && err.data) {
            const message = (err.data as { data: string }).data;
            ShowToast("error", message);
          }
        }
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
