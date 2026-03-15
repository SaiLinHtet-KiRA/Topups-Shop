export interface AccountInfo {
  banned: boolean;
  balance: number;
  totalBalance: number;
  role: "user" | "admin";
  username: string;
}
