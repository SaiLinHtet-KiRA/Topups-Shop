import { Link } from "react-router";
import "./GameCard.css";
type game = { icon: string; name: string; _id: string };

export default function GameCard({ icon, name, _id }: game) {
  return (
    <Link to={_id} className="game-card">
      <img src={icon} alt={name} />
      <div>
        <span>
          <h1>{name}</h1>
        </span>
      </div>
    </Link>
  );
}
