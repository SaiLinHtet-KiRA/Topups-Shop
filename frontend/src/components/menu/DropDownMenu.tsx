import { Box, Receipt } from "@/svg";
import { useSearchParams } from "react-router";
import Selector from "../ui/Selector";

export default function DropDownMenu() {
  const options = [
    { value: "topups", svg: Box },
    { value: "recharges", svg: Receipt },
  ];
  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get("t");
  const onClick = (name: string, value: string) =>
    setSearchParams({ [name]: value }, { replace: true });

  return <Selector options={options} value={value!} onClick={onClick} />;
}
