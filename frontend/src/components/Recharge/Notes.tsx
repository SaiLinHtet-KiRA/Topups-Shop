import { ExclamationTriangle } from "../../svg";
import "./Notes.css";

export default function Notes() {
  const notes = ["dadasdasdas", "asdasdasdas", "asdadasda", "asdasdas"];
  const warining = "dadasdas";
  return (
    <section className="note-wrapper">
      <header>Need To Know</header>
      <ul className="note-container">
        {notes.map((note, i) => (
          <li className={"note" + i}>{note}</li>
        ))}
      </ul>
      <span className="warning">
        <ExclamationTriangle className="svg" />
        {warining}
      </span>
    </section>
  );
}
