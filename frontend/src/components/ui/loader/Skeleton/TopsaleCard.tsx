import { ArrowRightCircle } from "@/svg";
import "./TopsaleCard.css";

export default function TopsaleCard() {
  return (
    <div className="top-sales-card skeleton-topsales-loader">
      <div className="top-sales-image"></div>
      <div className="top-sales-info">
        <header></header>
        <div className="badge-wrapper">
          <span className="badge"></span>
          <span className="badge"></span>
        </div>
        <div className="game-badge"></div>
        <div className="topup-btn">
          Top Up
          <ArrowRightCircle className="svg" />
        </div>
      </div>
    </div>
  );
}
