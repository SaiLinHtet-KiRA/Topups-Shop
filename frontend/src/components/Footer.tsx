import { CopyRight } from "../svg";

export default function Footer() {
  return (
    <footer>
      <span className="flex-center">
        <CopyRight className="svg-sm" />
        {new Date().getFullYear()}
      </span>
      <span>version 2.1.4</span>
    </footer>
  );
}
