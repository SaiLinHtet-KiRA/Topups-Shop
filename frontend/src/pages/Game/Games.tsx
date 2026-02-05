import GameCard from "@/components/Card/GameCard";

import "./games.css";
import { useGetGamesQuery } from "@/redux/api/game";

export default function Games() {
  const { data } = useGetGamesQuery({ start: 1, limit: 10 });
  return (
    <section className="games-wrapper">
      <header>Games</header>
      <section className="game-cards-wrapper">
        {data?.map((game) => (
          <GameCard {...game} />
        ))}
      </section>
    </section>
  );
}
