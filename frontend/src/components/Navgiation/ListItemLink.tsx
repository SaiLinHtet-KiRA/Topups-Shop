import { Controller, Currency, Service, User } from "@/svg";
import "./ListItemLink.css";
import { Link } from "react-router";
import React from "react";

export default function ListItemLink() {
  const Items = [
    { to: "/games", label: "games", svg: Controller },
    { to: "/recharge", label: "recharge", svg: Currency },
    { to: "/dashborad", label: "profile", svg: User },
    { to: "https://t.me/lucius_playz", label: "contact us", svg: Service },
  ];
  return (
    <section className="list-item-link-container">
      {Items.map(({ to, label, svg }) => (
        <Link to={to} className="flex-center" key={label}>
          {React.createElement(svg, { className: "svg-sm" })}
          {label}
        </Link>
      ))}
    </section>
  );
}
