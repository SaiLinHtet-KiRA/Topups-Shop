export interface PersonalInfo {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email: string;
}

export interface AccountInfo {
  _id?: string;
  role: "admin" | "customer";
  notification: string;
  email: string;
}
export interface Order {
  id: number;
  topic: string;
  status: "pending" | "success" | "fail";
  time: Date;
}
export interface FinancialInfo {
  coin: number;
  recharges: Order[];
  topups: Order[];
}
export default interface User
  extends PersonalInfo,
    AccountInfo,
    FinancialInfo {}
