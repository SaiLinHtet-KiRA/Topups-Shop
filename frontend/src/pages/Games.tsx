import GameCard from "../components/GameCard";
import { games } from "../data/games";

import "./games.css";

export default function Games() {
  return (
    <section className="games-wrapper">
      <header>Games</header>
      <section className="game-cards-wrapper">
        {games.map((game) => (
          <GameCard {...game} />
        ))}
      </section>
    </section>
  );
}
