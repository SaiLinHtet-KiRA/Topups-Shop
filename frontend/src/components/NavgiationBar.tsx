import { useState } from "react";
import { Menu } from "../svg";
import "./NavgiationBar.css";
import MenuCom from "./MenuCom";

export default function NavgiationBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuToggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="nav-container">
      <section>
        <div className="icon-container"></div>
      </section>
      <section>
        <span onClick={() => openMenuToggle()}>
          <Menu className="svg-sm" />
        </span>
        {openMenu && <MenuCom openMenuToggle={openMenuToggle} />}
      </section>
    </nav>
  );
}
