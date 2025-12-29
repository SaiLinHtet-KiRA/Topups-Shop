import mongoose from "mongoose";
export interface RawTopup {
    customer: string;
    game: string;
    user_id?: number;
    zone_id?: number;
    ingame_name?: string;
    packages: {
        package_name: string;
        package_images: string;
        price: number;
    }[];
    currency: "Coin" | "MMK" | "THB";
    payment: "Coin" | "Kpay" | "Wavepay" | "Bangkok Bank";
    total: number;
}
export default interface Topup extends Omit<RawTopup, "customer" | "game"> {
    _id: mongoose.Types.ObjectId;
    id: number;
    customer: mongoose.Types.ObjectId;
    game: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    status: "pending" | "success" | "fail";
}
