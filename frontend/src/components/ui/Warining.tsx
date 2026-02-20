import { ExclamationTriangle } from "@/svg";
import "./Warining.css";

export default function Warining({ text }: { text: string }) {
  return (
    <span className="warning">
      <ExclamationTriangle className="svg" />
      {text}
    </span>
  );
}
