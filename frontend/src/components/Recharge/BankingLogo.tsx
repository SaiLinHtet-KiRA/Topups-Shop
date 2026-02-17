import kpay from "../../assets/banking/kpay/icon.webp";
import wavepay from "../../assets/banking/wavepay/icon.webp";
import aya from "../../assets/banking/aya/icon.webp";
import uab from "../../assets/banking/uab/icon.webp";

export default function BankingLogo({ banking }: { banking: string }) {
  if (banking.toLocaleLowerCase() == "kpay")
    return <img src={kpay} alt="kpay" />;
  else if (banking.toLocaleLowerCase() == "wavepay")
    return <img src={wavepay} alt="wavepay" />;
  else if (banking.toLocaleLowerCase() == "aya pay")
    return <img src={aya} alt="aya pay" />;
  else if (banking.toLocaleLowerCase() == "uab")
    return <img src={uab} alt="uab" />;
  return <img src={wavepay} alt="wavepay" />;
}
