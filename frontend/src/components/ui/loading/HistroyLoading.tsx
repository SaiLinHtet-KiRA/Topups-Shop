import HistoryCard from "../loader/Skeleton/HistoryCard";

export default function HistroyLoading() {
  return Array(10)
    .fill(0)
    .map((_, i) => <HistoryCard key={"history-" + i} />);
}
