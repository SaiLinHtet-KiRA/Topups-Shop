import type { SvgCompontentProp } from "@/svg";
import "./PaymentCard.css";
import React from "react";

export default function PaymentCard({
  name,
  icon,
}: {
  name: string;
  icon: SvgCompontentProp;
}) {
  return (
    <label htmlFor={name} className="payment-card">
      <input
        type="radio"
        className="check-box-input"
        name="payment-checkbox"
        required
        id={name}
        defaultChecked={true}
      />
      <div>{name}</div>
      <span className="svg-container">
        {React.createElement(icon, { className: "svg" })}
      </span>
    </label>
  );
}
