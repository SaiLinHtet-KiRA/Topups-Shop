export interface RechargeForStore {
  step: 1 | 2 | 3;
  recharge: RechargeDTO;
}

export interface RechargeDTO {
  package_id: string;
  payment_index: number;
  currency: "MMK" | "THB";
  // payment: "kpay" | "wave";
  payment: string;
  receipt: File;
}

export default interface Recharge {
  id: number;
  customer_id: string;
  coin: number;
  price: number;
  currency: "MMK" | "THB";
  payment: "Kapy" | "Wavepay" | "Bangkok Bank";
  status: "pending" | "success" | "fail";
  file: string | null;
  time: Date;
}
