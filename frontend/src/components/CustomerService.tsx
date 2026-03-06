import { Service } from "@/svg";
import { Link } from "react-router";

export default function CustomerService() {
  return (
    <Link
      to="https://t.me/lucius_playz"
      target="_blank"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-color)",
        width: "3rem",
        height: "3rem",
        borderRadius: "100% 68% 100% 68% / 71% 100% 66% 88% ",
      }}
    >
      <Service className="svg" />
    </Link>
  );
}
