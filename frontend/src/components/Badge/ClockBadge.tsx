import { Clock } from "@/svg";

export default function ClockBadge({ value }: { value: Date }) {
  return (
    <span className="badge">
      <Clock className="svg" />
      {new Date(value).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })}
    </span>
  );
}
