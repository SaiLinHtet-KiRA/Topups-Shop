import { toast } from "react-toastify";

export default function ShowToast(
  type: "success" | "error" = "success",
  msg: String,
) {
  toast[type](msg, {
    theme: "dark",
    position: "top-right",
  });
}
