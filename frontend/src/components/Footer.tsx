import { CopyRight } from "../svg";

export default function Footer() {
  return (
    <footer>
      <span className="copyright">
        <CopyRight className="svg" />
        {new Date().getFullYear()}
      </span>
      <span>version 1.0.0</span>
    </footer>
  );
}
