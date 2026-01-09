import mongoose from "mongoose";
import { TopupDocument } from "./Topup.model";
import { DepositDocument } from "./Deposit.model";

export interface FinancialDocument extends mongoose.Document {
  deposits: DepositDocument[];
  topoups: TopupDocument[];
}

const FinancialSchema = new mongoose.Schema(
  {
    deposits: {
      type: [mongoose.Schema.ObjectId],
      ref: "Depoist",
    },
    topoups: {
      type: [mongoose.Schema.ObjectId],
      ref: "Topup",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const FinancialModel = mongoose.connection
  .useDb("Financial")
  .model<FinancialDocument>("Financial", FinancialSchema);

export default FinancialModel;
