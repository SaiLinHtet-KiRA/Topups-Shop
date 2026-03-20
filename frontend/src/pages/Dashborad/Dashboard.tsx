import { Clock, Controller, Document, User } from "@/svg";
import "./Dashborad.css";
import React from "react";
import { Link } from "react-router";
import { useAppSelector } from "@/redux/store";
import MoneyBadge from "@/components/ui/Badge/MoneyBadge";
import InputUserNameField from "@/components/input/InputUserNameField";

export default function Dashboard() {
  const options = [
    // { to: "Leaderboard", name: "Leaderboard", svg: Trophy },
    { to: "history", name: "history", svg: Clock },
    { to: "document", name: "terms & policy", svg: Document },
  ];
  const { role, totalBalance, balance } = useAppSelector(({ user }) => user);
  const moneys = [
    { text: "ကျန်ရှိငွေ", value: balance },
    { text: "စုစုပေါင်းငွေ", value: totalBalance },
  ];
  return (
    <main className="profile-container">
      <section className="info-cotaienr">
        <span className="svg-container">
          <User className="svg" />
        </span>
        <InputUserNameField />
      </section>
      <section className="money-badge-container">
        {moneys.map((data, i) => (
          <MoneyBadge {...data} key={"money-" + i}></MoneyBadge>
        ))}
      </section>
      <ul className="menu-options-container">
        {role == "admin" && (
          <li>
            <Link to="games">
              <Controller className="svg" />
              Games
            </Link>
          </li>
        )}
        {options.map(({ to, name, svg }) => (
          <li key={name}>
            <Link to={to}>
              {React.createElement(svg, { className: "svg" })}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
