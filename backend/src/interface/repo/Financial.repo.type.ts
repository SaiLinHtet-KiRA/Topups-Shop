import { DepositDocument } from "../../model/Deposit.model";

export default interface UserRepo {
  create(receipt: DepositDocument): Promise<DepositDocument>;
  getById(id: string): Promise<DepositDocument>;
  updateById(id: string, data: DepositDocument): Promise<DepositDocument>;
  deleteById(id: string): Promise<DepositDocument>;
}
