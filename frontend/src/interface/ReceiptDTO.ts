export default interface ReceiptDTO {
  id: number;
  amount: number;
  status: "pending" | "success" | "fail";
  createdAt: Date;
  upatedAt: Date;
  name: string;
  banking: string;
}
