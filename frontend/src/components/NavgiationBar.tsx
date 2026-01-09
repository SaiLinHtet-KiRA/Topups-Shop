import { Link } from "react-router";
import { Currency } from "../svg";
import "./NavgiationBar.css";
import { useLazyGetAccountInfoQuery } from "../redux/api/auth";

export default function NavgiationBar() {
  return (
    <nav className="nav-container">
      <Link to="">
        <div className="logo-container"></div>
      </Link>
      <section>
        <Balance />
      </section>
    </nav>
  );
}
function Balance() {
  const [getInfo, _] = useLazyGetAccountInfoQuery();

  return (
    <button onClick={() => getInfo("")}>
      <Currency className="svg" />0 MMK
    </button>
    // <Link to="recharge" className="balance-container">
    //   <Currency className="svg" />0 MMK
    // </Link>
  );
}
