import { Deposit, DepositDocument } from "../../model/Deposit.model";

export default interface UserRepo {
  create(receipt: Deposit): Promise<DepositDocument>;
  getById(id: string): Promise<DepositDocument>;
  updateById(id: string, data: DepositDocument): Promise<DepositDocument>;
  deleteById(id: string): Promise<DepositDocument>;
  getMany(start: number, limit: number): Promise<DepositDocument[]>;
}
