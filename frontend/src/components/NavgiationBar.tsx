import { Link } from "react-router";
import { Currency } from "../svg";
import "./NavgiationBar.css";
import { useAppSelector } from "@/redux/store";

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
  const { balance } = useAppSelector(({ user }) => user);
  return (
    <Link to="recharge" className="balance-container">
      <Currency className="svg" />
      {balance} MMK
    </Link>
  );
}
