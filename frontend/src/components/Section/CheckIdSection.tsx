import type { FunctionComponent } from "react";
import "./CheckIdSection.css";
import { useSearchParams } from "react-router";

export default function CheckIdSection() {
  return (
    <section>
      <header>
        <span>1</span>
        <span>ENTER YOUR ID FOR DELIVERY</span>
      </header>
      <div className="check-id-contaier">
        <InputNumberField
          htmlFor="userID"
          id="input-id-container"
          placeHolder="User ID"
        />
        <InputNumberField
          htmlFor="zoneID"
          id="input-zone-id-container"
          placeHolder="Zone ID"
        />

        <span className="result"></span>
      </div>
    </section>
  );
}

export type InputProps = FunctionComponent<{
  htmlFor: string;
  id: string;
  placeHolder: string;
}>;

const InputNumberField: InputProps = ({ htmlFor, id, placeHolder }) => {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get(htmlFor);
  return (
    <label htmlFor={htmlFor} id={id} className="input-container">
      <input
        type="number"
        id={htmlFor}
        placeholder={placeHolder}
        required
        value={value || ""}
        onChange={(e) =>
          setSearchParams((prevParams) => {
            prevParams.set(`${htmlFor}`, e.target.value);
            return prevParams;
          })
        }
      />
    </label>
  );
};
