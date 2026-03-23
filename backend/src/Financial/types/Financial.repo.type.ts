import { DepositType, DepositDocument } from "../../Financial/Deposit.model";

export default interface FinancialRepoType {
  create(receipt: DepositType): Promise<DepositDocument>;
  getById(id: string): Promise<DepositDocument>;
  updateById(id: string, data: DepositDocument): Promise<DepositDocument>;
  deleteById(id: string): Promise<DepositDocument>;
  getMany(start: number, limit: number): Promise<DepositDocument[]>;
}
