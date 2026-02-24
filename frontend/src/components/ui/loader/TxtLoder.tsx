import { motion } from "motion/react";
import "./TxtLoder.css";

export default function TxtLoder({ txt }: { txt: string }) {
  return (
    <motion.div style={{ display: "flex", gap: 5 }}>
      {txt.split("").map((word, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1.2,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1 * (txt.length / 2),
          }}
          className="txt-loader"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
