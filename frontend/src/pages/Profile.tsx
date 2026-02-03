import { Clock, Document, User } from "@/svg";
import "./Profile.css";
import React from "react";

export default function Profile() {
  const options = [
    { name: "history", svg: Clock },
    { name: "document", svg: Document },
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
        {options.map(({ name, svg }) => (
          <li>
            {React.createElement(svg, { className: "svg" })}
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
