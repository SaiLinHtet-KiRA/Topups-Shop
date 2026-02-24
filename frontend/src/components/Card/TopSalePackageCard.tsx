import type { Package } from "@/interface/package";
import PriceBadge from "../Badge/PriceBadge";
import { ArrowRightCircle, Box } from "@/svg";
import numberToText from "@/helper/numberToText";
import { Link } from "react-router";
import "./TopSalePackageCard.css";

export default function TopSalePackageCard({
  icon,
  name,
  game,
  new_price,
  sold,
  _id,
}: Package) {
  return (
    <div className="top-sales-card">
      <div className="top-sales-image">
        <img src={icon} alt="" />
      </div>
      <div className="top-sales-info">
        <header>{name}</header>
        <div className="badge-wrapper">
          <PriceBadge value={new_price} />
          <span className="badge">
            <Box className="svg" />
            {numberToText(sold)}
          </span>
        </div>
        <Link to={"/games/" + game._id} className="game-badge">
          <span className="">
            <img src={game.icon} alt="" />
          </span>
          <header className="">{game.name}</header>
        </Link>
        <Link
          to={"/games/" + game._id + "?package=" + _id}
          className="topup-btn"
        >
          Top Up
          <ArrowRightCircle className="svg" />
        </Link>
      </div>
    </div>
  );
}
