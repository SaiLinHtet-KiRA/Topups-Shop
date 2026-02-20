import { BankNote } from "@/svg";

export default function PriceBadge({ value }: { value: number }) {
  return (
    <span className="badge">
      <BankNote className="svg" />
      {value.toLocaleString()} MMK
    </span>
  );
}
