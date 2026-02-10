import type Game from "./Game";
import type Id from "./Id";
import type { Package } from "./package";

export default interface Topup {
  _id: string;
  game: Game;
  package: Package;
  price: number;
  currency: "MMk";
  status: "pending" | "success" | "fail";
  Id?: Id;
  createdAt: Date;
}
