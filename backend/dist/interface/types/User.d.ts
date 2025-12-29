export interface PersonalInfo {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email: string;
    notification: string;
}
export interface AccountInfo {
    _id?: string;
    role: "admin" | "customer";
    email: string;
}
export interface FinancialInfo {
    coin: number;
    recharges: number[];
    topups: number[];
}
export default interface User extends PersonalInfo, AccountInfo, FinancialInfo {
}
