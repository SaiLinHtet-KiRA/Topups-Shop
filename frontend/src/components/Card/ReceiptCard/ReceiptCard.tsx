import type ReceiptDTO from "@/interface/ReceiptDTO";
import "./ReceiptCard.css";
import PriceBadge from "@/components/Badge/PriceBadge";
import StatusBadge from "@/components/Badge/StatusBadge";
import BankingLogo from "@/components/Recharge/BankingLogo";

export default function ReceiptCard({
  amount,
  banking,
  id,
  status,
}: ReceiptDTO) {
  return (
    <div className="receipt-card">
      <span className="img-container">
        <BankingLogo banking={banking} />
      </span>
      <div className="receipt-container">
        <header>Order ID - {id}</header>
        <div className="badge-wrapper">
          <PriceBadge value={amount} />
          <StatusBadge value={status} />
        </div>
        {/* <button>Report</button> */}
      </div>
    </div>
  );
}
