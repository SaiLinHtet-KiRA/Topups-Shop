import { Box, DownArrow, Receipt, type SvgCompontentProp } from "@/svg";
import "./DropDownMenu.css";
import { useSearchParams } from "react-router";
import React, { useEffect, useRef, useState } from "react";

export default function DropDownMenu() {
  const query = [
    { name: "topups", svg: Box },
    { name: "recharge", svg: Receipt },
  ];
  const [show, setShow] = useState<boolean>();
  const ref = useRef<HTMLDivElement>(null);
  const [getSearchParams, setSearchParams] = useSearchParams();
  const type = getSearchParams.get("type");
  const onClick = (name: string) =>
    setSearchParams({ type: name }, { replace: true });
  const selectedIndex = type == "recharge" ? 1 : 0;
  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      if (!(e.target as HTMLElement).contains(ref.current)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="drop-down-menu" ref={ref}>
      <ValueContainer
        name={query[selectedIndex].name}
        svg={query[selectedIndex].svg}
      />
      {show && (
        <ul className="drop-down-menu-options-container">
          {query.map(({ name, svg }) => (
            <OpctionContainer name={name} svg={svg} onClick={onClick} />
          ))}
        </ul>
      )}
    </div>
  );
}

type ValueContainer = {
  name: string;
  svg: SvgCompontentProp;
  onClick: (name: string) => void;
};

const ValueContainer = ({ name, svg }: Omit<ValueContainer, "onClick">) => {
  return (
    <div className="drop-down-menu-value-container">
      <span className="value">
        {React.createElement(svg, { className: "svg" })}
        {name}
      </span>
      <DownArrow className="svg" />
    </div>
  );
};

const OpctionContainer = ({ name, svg, onClick }: ValueContainer) => {
  return (
    <li className="menu-options" key={name} onClick={() => onClick(name)}>
      {React.createElement(svg, { className: "svg" })}
      {name}
    </li>
  );
};
