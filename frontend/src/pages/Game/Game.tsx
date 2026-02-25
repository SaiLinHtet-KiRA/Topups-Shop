import GameInfoContainer from "@/components/Container/GameInfoContainer";
import WholePageLoader from "@/components/ui/loading/WholePageLoader";
import { useGetGameQuery } from "@/redux/api/game";
import { useParams } from "react-router";

export default function Game() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetGameQuery(id!);
  if (isLoading) return <WholePageLoader />;
  if (data) return <GameInfoContainer {...data} />;
}
