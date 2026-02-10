import React from "react";
import "./StatusBadge.css";
export default function StatusBadge({
  value,
}: {
  value: "success" | "pending" | "fail";
}) {
  return <span className={"status " + value}>{value}</span>;
}
