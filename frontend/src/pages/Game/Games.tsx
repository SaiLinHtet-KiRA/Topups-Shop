import GameCard from "@/components/Card/GameCard";

import "./games.css";
import { useGetGamesQuery } from "@/redux/api/game";
import GameCardsLoading from "@/components/ui/loading/GameCardsLoading";

export default function Games() {
  const { data, isLoading } = useGetGamesQuery({ page: 1, limit: 20 });
  return (
    <section className="games-wrapper wrapper">
      <header>Games</header>
      <section className="game-cards-wrapper">
        {data?.map((game) => (
          <GameCard {...game} />
        ))}
        {isLoading && <GameCardsLoading />}
      </section>
    </section>
  );
}
