import React from "react";
import "./TabBar.css";
import { Controller, Home, Search, User } from "../svg";
import { useLocation, useNavigate } from "react-router";

export default function TabBar() {
  const { pathname } = useLocation();

  const Tabs = ["/", "/Games", "/Search", "/Profile"];
  const TabIcons = [Home, Controller, Search, User];

  return (
    <nav className="tab-bar-wrapper">
      <div className="tab-bar">
        <div className="tab-container">
          {Tabs.map((tab, i) => (
            <div
              key={tab}
              className="tab-wrapper"
              style={{ transform: `rotate(${30 * i}deg)` }}
            >
              <div className="tab" style={{ rotate: `${-50 - 30 * i}deg` }}>
                {React.createElement(TabIcons[i], {
                  className: "svg",
                  style: {
                    stroke: pathname == tab ? "balck" : "white",
                  },
                })}
                {pathname == tab && <span className="tab-active" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
