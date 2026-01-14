import { useSearchParams } from "react-router";
import PaymentInfo from "../components/Recharge/PaymentInfo";
import SelectBanking from "../components/Recharge/SelectBanking";
import { useMemo } from "react";
import bankings from "../data/bankings";
import Notes from "../components/Recharge/Notes";
import Form from "../components/form/Form";
import "./Recharge.css";

export default function Recharge() {
  const [params] = useSearchParams();
  const payment = params.get("payment") || "kpay";
  const selected = useMemo(
    () => bankings.find((banking) => banking.name.toLowerCase() == payment),
    [params]
  );
  return (
    <section className="recharge-wrapper">
      <SelectBanking payment={payment} />
      <PaymentInfo
        acc_name={selected!.acc_name}
        number={selected!.number}
        payment={payment}
      />
      <Notes />
      <Form payment={payment} />
    </section>
  );
}
