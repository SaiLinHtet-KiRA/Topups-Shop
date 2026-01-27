import PaymentCard from "../Card/PaymentCard";
import { Wallet } from "@/svg";
import "./SelectPaymentSection.css";

export default function SelectPayment() {
  const Payment = [{ name: "Wallet", icon: Wallet }];
  return (
    <section className="payment-container">
      <header>
        <span>3</span>
        <span>Select Payment</span>
      </header>
      <section className="payment-wrapper">
        {Payment.map((info) => (
          <PaymentCard {...info} />
        ))}
      </section>
    </section>
  );
}
