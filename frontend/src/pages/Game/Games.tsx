import GameCard from "@/components/Card/GameCard";

import "./games.css";
import { useGetGamesQuery } from "@/redux/api/game";
import CardLoader from "@/components/ui/loader/GameCardLoader";

export default function Games() {
  const { data, isLoading } = useGetGamesQuery({ page: 1, limit: 20 });
  return (
    <section className="games-wrapper wrapper">
      <header>Games</header>
      <section className="game-cards-wrapper">
        {data?.map((game) => (
          <GameCard {...game} />
        ))}
        {isLoading &&
          Array(8)
            .fill(0)
            .map((_, i) => <CardLoader key={i} />)}
      </section>
    </section>
  );
}
