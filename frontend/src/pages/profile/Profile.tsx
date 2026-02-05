import { Clock, Document, User } from "@/svg";
import "./Profile.css";
import React from "react";
import { Link } from "react-router";

export default function Profile() {
  const options = [
    { to: "history", name: "history", svg: Clock },
    { to: "document", name: "terms & policy", svg: Document },
  ];
  return (
    <main className="profile-container">
      <section className="info-cotaienr">
        <span className="svg-container">
          <User className="svg" />
        </span>
        <span>Sai Lin Htet</span>
      </section>
      <ul className="menu-options-container">
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
