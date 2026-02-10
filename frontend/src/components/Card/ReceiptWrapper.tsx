import type Topup from "@/interface/Topup";
import { useGetHistoryQuery } from "@/redux/api/auth";
import { useSearchParams } from "react-router";
import TopupCard from "./ReceiptCard/TopupCard";
import "./ReceiptWrapper.css";
import ReceiptCard from "./ReceiptCard/ReceiptCard";
import type ReceiptDTO from "@/interface/ReceiptDTO";

export default function ReceiptWrapper() {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const type = getSearchParams.get("type") || "topups";
  const page = Number(getSearchParams.get("page")) || 1;

  const { data, isFetching } = useGetHistoryQuery(
    { type: type, page, limit: 8 },
    { refetchOnMountOrArgChange: true },
  );
  console.log(data);
  return (
    <section className="receipt-wrapper">
      {data && !isFetching && (
        <>
          {type == "topups" &&
            (data?.data as Topup[]).map((topup) => (
              <TopupCard {...topup} key={topup._id} />
            ))}
          {type == "recharges" &&
            (data?.data as ReceiptDTO[]).map((receipt) => (
              <ReceiptCard {...receipt} key={receipt.id} />
            ))}
        </>
      )}
    </section>
  );
}
