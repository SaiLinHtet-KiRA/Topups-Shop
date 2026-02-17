import type { Package } from "@/interface/Package";
import "./PackageCard.css";
import { CheckMark } from "@/svg";
import { useSearchParams } from "react-router";

export default function PackageCard(props: Package) {
  const [getSearch, setSearch] = useSearchParams();
  const defpackage = getSearch.get("package");

  return (
    <label htmlFor={props.name} className="package-card">
      <input
        type="radio"
        className="check-box-input"
        name="package-checkbox"
        required
        id={props.name}
        defaultChecked={defpackage == props._id}
        onChange={() =>
          setSearch((prevParams) => {
            prevParams.set("package", props._id);
            return prevParams;
          })
        }
      />
      <span className="check-mark-container">
        <CheckMark className="svg" />
      </span>
      <div className="package-info">
        <header>
          {props.new_price.toLocaleString().replace(",", " ")} MMK
        </header>
        <span>{props.name}</span>
      </div>
      <span className="package-img-container">
        {props.icon && <img src={props.icon} alt="" />}
      </span>
    </label>
  );
}
