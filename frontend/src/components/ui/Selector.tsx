import { DownArrow, type SvgCompontentProp } from "@/svg";
import React, { useEffect, useRef, useState } from "react";
import "./Selector.css";
interface props {
  options: { value: string; svg?: SvgCompontentProp }[];
  value: string;
  onClick: (name: string, value: string) => void;
}

export default function Selector({ options, value, onClick }: props) {
  const [show, setShow] = useState<boolean>();
  const ref = useRef<HTMLDivElement>(null);
  const selectedIndex = value
    ? options.findIndex((option) => value == option.value)
    : 0;

  useEffect(() => {
    const Handler = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("click", Handler);
    return () => window.removeEventListener("click", Handler);
  }, []);
  return (
    <div className="drop-down-menu">
      <span ref={ref}>
        <ValueContainer
          name={options[selectedIndex].value}
          svg={options[selectedIndex].svg}
        />
      </span>
      {show && (
        <ul className="drop-down-menu-options-container">
          {options.map(({ value, svg }) => (
            <OpctionContainer
              name={value}
              svg={svg}
              onClick={onClick}
              key={value}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

type ValueContainer = {
  name: string;
  svg?: SvgCompontentProp;
  onClick: (name: string, value: string) => void;
};

const ValueContainer = ({ name, svg }: Omit<ValueContainer, "onClick">) => {
  return (
    <div className="drop-down-menu-value-container">
      <span className="value">
        {svg && React.createElement(svg, { className: "svg" })}
        {name}
      </span>
      <DownArrow className="svg" />
    </div>
  );
};

const OpctionContainer = ({ name, svg, onClick }: ValueContainer) => {
  return (
    <li className="menu-options" key={name} onClick={() => onClick("t", name)}>
      {svg && React.createElement(svg, { className: "svg" })}
      {name}
    </li>
  );
};
