import { Link } from "react-router";
import { Currency } from "../svg";
import "./NavgiationBar.css";
import {
  useGetAccountInfoQuery,
  useLazyGetAccountInfoQuery,
} from "../redux/api/auth";
import { BACKEND_URL } from "../config";

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
  const [getInfo, data] = useLazyGetAccountInfoQuery();
  return (
    <button
      onClick={() =>
        fetch(BACKEND_URL + "/auth/profile", {
          method: "GET",
          credentials: "include",
        })
      }
    >
      <Currency className="svg" />0 MMK
    </button>
    // <Link to="recharge" className="balance-container">
    //   <Currency className="svg" />0 MMK
    // </Link>
  );
}
