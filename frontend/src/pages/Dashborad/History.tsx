import ReceiptWrapper from "@/components/Card/ReceiptWrapper";
import DropDownMenu from "@/components/menu/DropDownMenu";
import Breadcrumbs from "@/components/Navgiation/Breadcrumbs";
import "./History.css";

export default function History() {
  return (
    <section className="history-wrapper">
      <Breadcrumbs path={["Profile", "History"]} />
      <DropDownMenu />
      <ReceiptWrapper />
    </section>
  );
}
