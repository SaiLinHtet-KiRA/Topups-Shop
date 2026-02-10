import type Topup from "@/interface/Topup";
import "./TopupCard.css";
import PriceBadge from "@/components/Badge/PriceBadge";
import StatusBadge from "@/components/Badge/StatusBadge";

export default function TopupCard({ package: Package, price, status }: Topup) {
  return (
    <div className="topup-card">
      <span className="img-container">
        <img src={Package.icon} alt="" />
      </span>
      <div className="info-container">
        <header>{Package.name}</header>
        <div className="badge-wrapper">
          <PriceBadge value={price} />
          <StatusBadge value={status} />
        </div>
        <button>Report</button>
      </div>
    </div>
  );
}
