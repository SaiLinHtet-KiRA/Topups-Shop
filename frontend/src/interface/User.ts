export interface AccountInfo {
  banned: boolean;
  balance: number;
  role: "user" | "admin";
}
