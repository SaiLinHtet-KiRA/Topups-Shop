import Receipt from "../../interface/other/Receipt";
import { DepositDocument } from "../Deposit.model";

export default interface FinancialServiceType {
  createDeposit(receipt: Receipt): Promise<DepositDocument>;
  getDepositById(id: string): Promise<DepositDocument>;
  updateDeposit(id: string, receipt: DepositDocument): Promise<DepositDocument>;
  getReceipts(page: number, limit: number): Promise<DepositDocument[]>;
}
