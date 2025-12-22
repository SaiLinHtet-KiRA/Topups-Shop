import kpay from "../../assets/banking/kpay/icon.webp";
import wavepay from "../../assets/banking/wavepay/icon.webp";

export default function BankingLogo({ banking }: { banking: string }) {
  if (banking.toLocaleLowerCase() == "kpay")
    return <img src={kpay} alt="kpay" />;
  return <img src={wavepay} alt="wavepay" />;
}
