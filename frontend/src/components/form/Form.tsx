import { createElement, useState } from "react";
import { ArrowUpTray, BankNote, User, type SvgCompontentProp } from "@/svg";
import "./Form.css";
import { useDepositMutation } from "@/redux/api/deposit";
import type Receipt from "@/interface/Receipt";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import ShowToast from "@/helper/ShowToast";

interface InputField {
  id: keyof Receipt;
  header: string;
  svg: SvgCompontentProp;
  type: string;
  setValue: (field: keyof Receipt, value: string | number | File) => void;
}

export default function Form({ payment }: { payment: string }) {
  const router = useNavigate();
  const [receipt, setReceipt] = useState<Receipt>({
    name: "",
    banking: payment,
    amount: 0,
    receipt: null,
  });
  const [deposit] = useDepositMutation();

  const setValue = (field: keyof Receipt, value: string | number | File) => {
    setReceipt((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const inputFiled: InputField[] = [
    {
      id: "name",
      header: "Account Holder Name",
      svg: User,
      type: "text",
      setValue,
    },
    {
      id: "amount",
      header: "Recharge Amount",
      svg: BankNote,
      type: "number",
      setValue,
    },
  ];

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          if (receipt) {
            deposit(receipt);
            ShowToast("success", "Your order is suceessfully placed!!");
            router(-1);
          }
        } catch (error) {
          toast.error("Something worng");
        }
      }}
    >
      {inputFiled.map((info) => (
        <InputField {...info} />
      ))}
      <label htmlFor="select-receipt" className="select-file-container">
        {receipt.receipt ? (
          <span className="receipt-info-container">
            <span className="receipt-img-container">
              <img src={URL.createObjectURL(receipt.receipt)} />
            </span>
            <span className="receipt-filename">{receipt.receipt.name}</span>
          </span>
        ) : (
          <>
            <ArrowUpTray className="svg" />
            Select Receipt
          </>
        )}
        <input
          type="file"
          accept="image/*"
          id="select-receipt"
          required
          onChange={(e) => {
            if (e.target.files?.length) {
              setValue("receipt", e.target.files[0]);
            }
          }}
        />
      </label>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

const InputField = ({ id, header, svg, type, setValue }: InputField) => {
  return (
    <label htmlFor={id} className="input-container">
      <header>{header}</header>
      <section>
        {createElement(svg, { className: "svg" })}
        <input
          type={type}
          id={id}
          required
          onChange={(e) => setValue(id, e.target.value)}
        />
      </section>
    </label>
  );
};
