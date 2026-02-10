import { Clock, Controller, Document, User } from "@/svg";
import "./Dashborad.css";
import React from "react";
import { Link } from "react-router";
import { useAppSelector } from "@/redux/store";

export default function Dashboard() {
  const options = [
    { to: "history", name: "history", svg: Clock },
    { to: "document", name: "terms & policy", svg: Document },
  ];
  const { role } = useAppSelector(({ user }) => user);
  return (
    <main className="profile-container">
      <section className="info-cotaienr">
        <span className="svg-container">
          <User className="svg" />
        </span>
        <span>Sai Lin Htet</span>
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
          <li>
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
