export interface RawTopup {
  game: {
    icon: string;
    name: string;
  };
  customer: string;
  user_id?: number;
  zone_id?: number;
  ingame_name?: string | null;
  packages: {
    package_name: string;
    package_images: string;
    price: number;
  }[];
  payment: "Coin" | "Kpay" | "Wavepay" | "Bangkok Bank";
  currency: "Coin" | "MMK" | "THB";
  total: number;
}
export default interface Topup extends RawTopup {
  id: number;
  _id: string;
  topic: string;
  createdAt: Date;
  updatedAt: Date;
  status: "pending" | "success" | "fail";
}
export interface RawTopupforStore {
  game: string;
  user_id?: number;
  zone_id?: number;
  ingame_name?: string | null;
  packages: string[];
  currency: "Coin" | "MMK" | "THB";
  payment: "Coin" | "Kpay" | "Wavepay" | "Bangkok Bank";
  price: number;
}
