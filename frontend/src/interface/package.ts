import type Games from "./Game";

export interface Package {
  _id: string;
  name: string;
  icon: string;
  game: Games;
  sold: number;
  old_price: number;
  new_price: number;
  createdAt?: Date;
  upatedAt?: Date;
}
