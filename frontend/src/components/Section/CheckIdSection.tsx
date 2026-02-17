import type { FunctionComponent } from "react";
import "./CheckIdSection.css";
import { useSearchParams } from "react-router";
import type { CheckId } from "@/interface/Game";
import Selector from "../ui/Selector";

export default function CheckIdSection({
  url,
  userID,
  zoneID,
  server,
}: CheckId) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get("t");
  const setParams = (queryName: string, value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set(`${queryName}`, value);
      return prevParams;
    });
  };
  return (
    <section>
      <header>
        <span>1</span>
        <span>ENTER YOUR ID FOR DELIVERY</span>
      </header>
      <div className="check-id-contaier">
        {server.length ? (
          <Selector
            options={server.map((str) => ({
              value: str,
            }))}
            value={value!}
            onClick={setParams}
          />
        ) : (
          <></>
        )}
        {userID && (
          <InputNumberField
            htmlFor="userId"
            id="input-id-container"
            placeHolder="User ID"
          />
        )}
        {zoneID && (
          <InputNumberField
            htmlFor="zoneId"
            id="input-zone-id-container"
            placeHolder="Zone ID"
          />
        )}
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
