import { Link } from "react-router";
import { Currency, Logo } from "../../svg";
import "./NavgiationBar.css";
import { useAppSelector } from "@/redux/store";
import CustomerService from "../CustomerService";

export default function NavgiationBar() {
  return (
    <nav className="nav-container">
      <Link to="">
        <div className="logo-container">
          <Logo className="svg" />
        </div>
      </Link>
      <section className="icon-cotainer">
        <Balance />
        <CustomerService />
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
