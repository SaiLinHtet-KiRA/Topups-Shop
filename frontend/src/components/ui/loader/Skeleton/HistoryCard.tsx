import "./HistoryCard.css";

export default function HistoryCard() {
  return (
    <div className="topup-card history-card-loader">
      <span className="img-container"></span>
      <div className="info-container">
        <header></header>
        <div className="badge-wrapper">
          <span className="badge" />
          <span className="badge" />
        </div>
        {/* <button>Report</button> */}
      </div>
    </div>
  );
}
