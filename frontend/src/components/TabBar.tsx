import React, { useEffect, useRef } from "react";
import "./TabBar.css";
import { Controller, Home, Search, User } from "../svg";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import useScroll from "../hook/useScrollEnd";

export default function TabBar() {
  const { pathname } = useLocation();
  const tabBar = useRef<null | HTMLDivElement>(null);
  const Tabs = ["/", "/games", "/profile"];
  const TabIcons = [Home, Controller, User];

  useScroll(tabBar);

  return (
    <nav className="tab-bar-wrapper" ref={tabBar}>
      {Tabs.map((tab, i) => (
        <Link to={tab} className="tab" key={tab}>
          {React.createElement(TabIcons[i], {
            className: "svg",
            style: {
              stroke: pathname == tab ? "var(--primary-color)" : "white",
              fill: pathname == tab ? "var(--primary-color)" : "white",
            },
          })}
          {pathname == tab && (
            <motion.span layoutId="tab-active" className="tab-active" />
          )}
        </Link>
      ))}
    </nav>
  );
}
