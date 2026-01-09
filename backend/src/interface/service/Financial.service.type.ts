import { DepositDocument } from "@/model/Deposit.model";

export default interface FinancialService {
  createDeposit(): Promise<DepositDocument>;
}
