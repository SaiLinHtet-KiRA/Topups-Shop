import { Box, Receipt } from "@/svg";
import { useSearchParams } from "react-router";
import Selector from "../ui/Selector";
import { useDispatch } from "react-redux";
import { removeAllHistroy } from "@/redux/features/adapter/history";

export default function DropDownMenu() {
  const options = [
    { value: "topups", svg: Box },
    { value: "recharges", svg: Receipt },
  ];
  const dispatch = useDispatch();

  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get("t");
  const onClick = (_: string, value: string) => {
    dispatch(removeAllHistroy());
    setSearchParams({ t: value }, { replace: true });
  };

  return <Selector options={options} value={value!} onClick={onClick} />;
}
