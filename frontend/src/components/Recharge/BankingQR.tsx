import kpay from "../../assets/banking/kpay/qr.webp";
import wavepay from "../../assets/banking/wavepay/qr.webp";

export default function BankingQR({ banking }: { banking: string }) {
  if (banking.toLocaleLowerCase() == "kpay")
    return <img src={kpay} alt="kpay" />;
  return <img src={wavepay} alt="wavepay" />;
}
