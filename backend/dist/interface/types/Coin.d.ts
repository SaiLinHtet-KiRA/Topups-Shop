export interface RawCoin {
    amount: number;
    price: number;
}
export default interface Coin extends RawCoin {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export type collection = "mmkcoin" | "thbcoin";
export type Currency = "MMK" | "THB";
