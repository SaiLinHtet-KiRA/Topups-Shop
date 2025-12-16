import { useEffect, useRef } from "react";
import "./Menu.css";

export default function MenuCom({
  openMenuToggle,
}: {
  openMenuToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ClickHandler = (e: PointerEvent) => {
      if ((e.target as HTMLDivElement).contains(ref.current)) {
        openMenuToggle();
      }
    };

    window.addEventListener("click", ClickHandler);

    return () => {
      window.removeEventListener("click", ClickHandler);
    };
  }, []);
  return (
    <section ref={ref} className="menu-container">
      <section>
        <div className="icon-container"></div>
      </section>
    </section>
  );
}
