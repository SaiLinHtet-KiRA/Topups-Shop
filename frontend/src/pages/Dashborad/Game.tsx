import GameForm from "@/components/form/GameForm";
import { useGetGameQuery } from "@/redux/api/game";
import { useParams } from "react-router";

export default function Game() {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetGameQuery(id!);

  if (!data) return <>some thing is wrong</>;
  return <GameForm {...data} />;
}
