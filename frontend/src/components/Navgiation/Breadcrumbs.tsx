import { ChevronRight } from "@/svg";
import "./Breadcrumbs.css";
import { useNavigate } from "react-router";

export default function Breadcrumbs({ path }: { path: string[] }) {
  const roter = useNavigate();
  return (
    <nav className="breadcrumbs-wrapper">
      {path.map((path, index) => (
        <span onClick={() => index == 0 && roter(-1)}>
          <ChevronRight className="svg" />
          <span className="path-name">{path}</span>
        </span>
      ))}
    </nav>
  );
}
