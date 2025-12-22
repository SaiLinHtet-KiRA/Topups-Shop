import { DocumentDuplicate } from "../../svg";
import CopyToClipboard from "../../util/CopyToClipboard";
import BankingQR from "./BankingQR";
import "./PaymentInfo.css";

export default function PaymentInfo({
  acc_name,
  number,
  payment,
}: {
  acc_name: string;
  number: string;
  payment: string;
}) {
  return (
    <section className="payment-info-wrapper">
      <header>Payment Information</header>
      <section className="payment-info-container">
        <span className="qr-container">
          <BankingQR banking={payment} />
        </span>
        <span>{acc_name}</span>
        <span className="acc_number" onClick={() => CopyToClipboard(number)}>
          {number.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")}
          <DocumentDuplicate className="svg" />
        </span>
      </section>
    </section>
  );
}
