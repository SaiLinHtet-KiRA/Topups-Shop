import "./CheckIdSection.css";
import { useSearchParams } from "react-router";
import type { CheckId } from "@/interface/Game";
import Selector from "../ui/Selector";
import InputField from "../ui/InputField";

export default function CheckIdSection({ userID, zoneID, server }: CheckId) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get("server");
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
          <InputField
            type="number"
            htmlFor="userID"
            id="input-id-container"
            placeHolder="User ID"
          />
        )}
        {zoneID && (
          <InputField
            type="number"
            htmlFor="zoneID"
            id="input-zone-id-container"
            placeHolder="Zone ID or Server ID"
          />
        )}
        <span className="result"></span>
      </div>
    </section>
  );
}
