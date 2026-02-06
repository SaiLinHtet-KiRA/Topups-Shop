import { DepositDocument } from "../../model/Deposit.model";
import Receipt from "../../interface/other/Receipt";

export default interface FinancialService {
  createDeposit(receipt: Receipt): Promise<DepositDocument>;
  getDepositById(id: string): Promise<DepositDocument>;
  updateDeposit(id: string, receipt: DepositDocument): Promise<DepositDocument>;
  getReceipts(page: number, limit: number): Promise<DepositDocument[]>;
}
