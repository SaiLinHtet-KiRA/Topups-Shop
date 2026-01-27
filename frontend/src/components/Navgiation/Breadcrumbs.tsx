import { ChevronRight } from "@/svg";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ path }: { path: string[] }) {
  return (
    <nav className="breadcrumbs-wrapper">
      {path.map((path) => (
        <>
          <ChevronRight className="svg" />
          <span className="path-name">{path}</span>
        </>
      ))}
    </nav>
  );
}
