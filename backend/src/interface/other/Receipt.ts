import { DepositDocument } from "../../Financial/Deposit.model";

export default interface Receipt extends DepositDocument {
  receipt: Buffer;
  chatId: string;
}
