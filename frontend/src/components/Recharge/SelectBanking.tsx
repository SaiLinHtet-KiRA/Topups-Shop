import { useNavigate, useSearchParams } from "react-router";
import bankings from "../../data/bankings";
import { DownArrow } from "../../svg";
import { useEffect, useRef, useState } from "react";
import BankingLogo from "./BankingLogo";
import "./SelectBanking.css";

export default function SelectBanking({ payment }: { payment: string }) {
  const router = useNavigate();
  const selectorRef = useRef<HTMLDivElement | null>(null);
  const [showOptions, setShowOptions] = useState<Boolean>(false);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (selectorRef.current!.contains(e.target as HTMLDivElement)) {
        setShowOptions(true);
      } else {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="banking-selector" ref={selectorRef}>
      <div className="value-container">
        <div className="value">
          <span className="icon-container">
            <BankingLogo banking={payment} />
          </span>
          <span className="banking-name">{payment}</span>
        </div>
        <span className="icon">
          <DownArrow className="svg" />
        </span>
      </div>
      <div className="banking-options">
        {showOptions &&
          bankings
            .filter((banking) => banking.name.toLowerCase() != payment)
            .map((banking) => (
              <div
                key={banking.name}
                className="value-container"
                onClick={() => {
                  router("?payment=" + banking.name.toLowerCase(), {
                    replace: true,
                  });
                  setShowOptions(false);
                }}
              >
                <div className="value">
                  <span className="icon-container">
                    <BankingLogo banking={banking.name} />
                  </span>
                  <span className="banking-name">{banking.name}</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
