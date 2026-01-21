import "./GameCard.css";
type game = { icon: string; name: string };

export default function GameCard({ icon, name }: game) {
  return (
    <div className="game-card">
      <img src={"/Games" + icon} alt={name} />
      <div>
        <span>
          <h1>{name}</h1>
        </span>
      </div>
    </div>
  );
}
