import { DepositDocument } from "../../model/Deposit.model";

export default interface Receipt extends DepositDocument {
  receipt: Buffer;
}
