import ReceiptWrapper from "@/components/Card/ReceiptWrapper";
import DropDownMenu from "@/components/menu/DropDownMenu";
import Breadcrumbs from "@/components/Navgiation/Breadcrumbs";

export default function Histroy() {
  return (
    <section>
      <Breadcrumbs path={["Profile", "History"]} />
      <DropDownMenu />
      <ReceiptWrapper />
    </section>
  );
}
