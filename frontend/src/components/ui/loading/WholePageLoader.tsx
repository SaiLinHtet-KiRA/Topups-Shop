import LogoLoader from "../loader/LogoLoader";
import TxtLoder from "../loader/TxtLoder";
import "./WholePageLoader.css";
export default function WholePageLoader() {
  return (
    <main className="full-page-loader-wrapper">
      <span className="loader-container">
        <LogoLoader />
        <TxtLoder txt="Loading..." />
      </span>
    </main>
  );
}
