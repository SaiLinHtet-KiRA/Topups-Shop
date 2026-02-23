import "./Loader.css";
import { motion, stagger } from "motion/react";

export default function Loader() {
  const txt = "Loading...";
  return (
    <span className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 312.38 154.56"
        className="svg"
      >
        <motion.path
          d="M265.46 0L188 0L161.09 0L134.17 0L107.26 0L80.35 0L64.28 26.91L48.21 53.82L32.14 80.74L0 134.56L26.92 134.56L59.05 80.74L75.12 53.82L91.19 26.91L118.11 26.91L145.02 26.91L171.93 26.91L249.39 26.91L201.19 107.65L96.81 107.65L85.97 80.74L53.83 134.56L80.74 134.56L212.03 134.56L228.1 107.65L276.31 26.91L292.38 0L265.46 0Z"
          fill="none"
          stroke="currentColor"
          stroke-width="10"
          stroke-linejoin="round"
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            repeatDelay: 1,
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
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
            className="txt"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </span>
  );
}
