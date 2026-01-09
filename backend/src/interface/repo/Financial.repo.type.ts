import { DepositDocument } from "../../model/Deposit.model";

export default interface UserRepo {
  create(): Promise<DepositDocument>;
  updateById(id: string, data: DepositDocument): Promise<DepositDocument>;
  deleteById(id: string): Promise<DepositDocument>;
}
