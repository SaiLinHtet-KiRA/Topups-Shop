import type Topup from "@/interface/Topup";
import { useGetHistoryQuery } from "@/redux/api/auth";
import { useSearchParams } from "react-router";
import TopupCard from "./ReceiptCard/TopupCard";
import ReceiptCard from "./ReceiptCard/ReceiptCard";
import type ReceiptDTO from "@/interface/ReceiptDTO";
import { useEffect } from "react";
import { histroySelectors } from "@/redux/features/adapter/history";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import "./ReceiptWrapper.css";
import EmptyList from "../ui/error/EmptyList";
import { useAppSelector } from "@/redux/store";
import HistroyLoading from "../ui/loading/HistroyLoading";

export default function ReceiptWrapper() {
  const [getSearchParams, setSearchParams] = useSearchParams();

  const type = getSearchParams.get("t") || "topups";
  const page = Number(getSearchParams.get("page")) || 1;

  const { data, isFetching } = useGetHistoryQuery(
    {
      type: type,
      page,
      limit: 8,
    },
    { refetchOnMountOrArgChange: true },
  );
  const histroy = useSelector(histroySelectors.selectAll);
  const { isLoading } = useAppSelector(({ histroy }) => histroy);
  useEffect(() => {
    setSearchParams(
      (prev) => {
        prev.set("page", "1");
        return prev;
      },
      { replace: true },
    );
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      if (data?.data.length && !isFetching) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setSearchParams(
            (prev) => {
              prev.set("page", String(page + 1));
              return prev;
            },
            { replace: true },
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, isFetching]);

  return (
    <>
      <motion.section className="receipt-wrapper">
        {histroy.length ? (
          <>
            {type == "topups" &&
              (histroy as Topup[]).map((topup) => (
                <TopupCard {...topup} key={topup._id} />
              ))}
            {type == "recharges" &&
              (histroy as ReceiptDTO[]).map((receipt) => (
                <ReceiptCard {...receipt} key={receipt.id} />
              ))}
          </>
        ) : (
          <></>
        )}
        {isLoading && <HistroyLoading />}
      </motion.section>
      {!histroy.length ? <EmptyList /> : <></>}
    </>
  );
}
