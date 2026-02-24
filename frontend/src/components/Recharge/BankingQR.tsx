import kpay from "../../assets/banking/kpay/qr.webp";
import wavepay from "../../assets/banking/wavepay/qr.webp";
import aya from "../../assets/banking/aya/qr.webp";
import uab from "../../assets/banking/uab/qr.webp";

export default function BankingQR({ banking }: { banking: string }) {
  if (banking.toLocaleLowerCase() == "kpay") return <img src={kpay} alt="" />;
  if (banking.toLocaleLowerCase() == "wavepay")
    return <img src={wavepay} alt="" />;
  if (banking.toLocaleLowerCase() == "uab") return <img src={uab} alt="" />;
  return <img src={aya} alt="" />;
}
