import "./MoneyBadge.css";

export default function MoneyBadge({
  text,
  value,
}: {
  text: string;
  value: number;
}) {
  return (
    <div className="money-badge">
      <span className="label">{text}</span>
      <span className="value">{value} MMK</span>
    </div>
  );
}
