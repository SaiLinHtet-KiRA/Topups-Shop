import LogoLoader from "./LogoLoader";
import "./GameCardLoader.css";

export default function CardLoader() {
  return (
    <div className="game-card game-card-loader">
      <span className="loader-container">
        <LogoLoader />
      </span>
    </div>
  );
}
