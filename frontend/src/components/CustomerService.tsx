import { Service } from "@/svg";
import { Link } from "react-router";

export default function CustomerService() {
  return (
    <Link
      to="https://t.me/lucius_playz"
      target="_blank"
      style={{
        position: "fixed",
        backgroundColor: "var(--primary-color)",
        top: "26svw",
        right: "1rem",
        zIndex: 100,
        padding: "0.6rem",
        borderRadius: "100%",
      }}
    >
      <Service className="svg" />
    </Link>
  );
}
