import { EmptyBox } from "@/svg";
import "./EmptyList.css";

export default function EmptyList() {
  return (
    <section className="empty-container">
      <div>
        <EmptyBox className="svg" />
        <p>There is no history in your box!!</p>
      </div>
    </section>
  );
}
