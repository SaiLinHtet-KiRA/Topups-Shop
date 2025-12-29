export interface RawRecharge {
    customer_id: string;
    coin: number;
    price: number;
    currency: "MMK" | "THB";
    payment: Payment;
    file: string;
}
export default interface Recharge extends RawRecharge {
    id: number;
    time: Date;
}
export type Payment = "Kpay" | "Wavepay" | "Bangkok Bank";
