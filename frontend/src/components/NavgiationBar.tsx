import { Link } from "react-router";
import { Currency } from "../svg";
import "./NavgiationBar.css";

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
  return (
    <Link to="recharge" className="balance-container">
      <Currency className="svg" />0 MMK
    </Link>
  );
}
