import { useState } from "react";
import { ArrowUpTray } from "../../svg";
import "./SelecFile.css";

export default function SelecFile({ payment }: { payment: string }) {
  const [receipt, setReceipt] = useState<File | null>(null);
  return (
    <section className="select-file-container">
      <label htmlFor="select-receipt" className="input-container">
        {receipt ? (
          <span className="receipt-info-container">
            <span className="receipt-img-container">
              <img src={URL.createObjectURL(receipt)} />
            </span>
            <span className="receipt-filename">{receipt.name}</span>
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
          onChange={(e) => {
            if (e.target.files?.length) {
              setReceipt(e.target.files[0]);
            }
          }}
        />
      </label>
      <button className="submit-btn">Submit</button>
    </section>
  );
}
