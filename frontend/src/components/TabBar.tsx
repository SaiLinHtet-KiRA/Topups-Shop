import React, { useEffect, useRef } from "react";
import "./TabBar.css";
import { Controller, Home, Search, User } from "../svg";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
export default function TabBar() {
  const { pathname } = useLocation();
  const tabBar = useRef<null | HTMLDivElement>(null);
  const Tabs = ["/", "/games", "/search", "/profile"];
  const TabIcons = [Home, Controller, Search, User];

  useEffect(() => {
    const FadeOut = () => {
      if (
        !(window.innerHeight + window.scrollY >= document.body.offsetHeight)
      ) {
        if (tabBar.current) {
          tabBar.current.style.animation = "fade-out 0.5s ease forwards";
        }
      }
    };
    const FadeIn = () => {
      if (
        !(window.innerHeight + window.scrollY >= document.body.offsetHeight)
      ) {
        if (tabBar.current) {
          tabBar.current.style.animation = "fade-in 0.5s ease forwards";
        }
      }
    };

    window.addEventListener("scroll", FadeOut);
    window.addEventListener("scrollend", FadeIn);
    return () => {
      window.addEventListener("scroll", FadeOut);
      window.addEventListener("scrollend", FadeIn);
    };
  }, []);
  return (
    <nav className="tab-bar-wrapper" ref={tabBar}>
      {Tabs.map((tab, i) => (
        <Link to={tab} className="tab" key={tab}>
          {React.createElement(TabIcons[i], {
            className: "svg",
            style: {
              stroke: pathname == tab ? "var(--primary-color)" : "white",
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
