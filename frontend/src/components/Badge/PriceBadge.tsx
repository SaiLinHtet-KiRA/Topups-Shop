import { BankNote } from "@/svg";
import React from "react";

export default function PriceBadge({ value }: { value: number }) {
  return (
    <span className="badge">
      <BankNote className="svg" />
      {value.toLocaleString()} MMK
    </span>
  );
}
