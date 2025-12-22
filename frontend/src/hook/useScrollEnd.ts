import { useEffect, useRef } from "react";

export default function useScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  delay: number = 150
): void {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (
        !(window.innerHeight + window.scrollY >= document.body.offsetHeight)
      ) {
        if (ref.current) {
          ref.current.style.animation = "fade-out 0.5s ease forwards";
        }
      }
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (
          !(window.innerHeight + window.scrollY >= document.body.offsetHeight)
        ) {
          if (ref.current) {
            ref.current.style.animation = "fade-in 0.5s ease forwards";
          }
        }
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [ref, delay]);
}
