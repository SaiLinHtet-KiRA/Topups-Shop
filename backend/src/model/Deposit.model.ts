import mongoose from "mongoose";
import SeqModel from "./Seq.model";

export interface DepositDocument extends mongoose.Document {
  id: number;
  qr: string;
  amount: number;
  status: "pending" | "success" | "fail";
  createdAt: Date;
  upatedAt: Date;
}

const DepositSchema = new mongoose.Schema<DepositDocument>(
  {
    id: {
      type: Number,
      require: true,
    },
    qr: {
      type: String,
      require: false,
    },
    amount: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "success", "fail"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

DepositSchema.pre("save", async function () {
  try {
    if (this.isNew) {
      const newOrderID = await SeqModel.findByIdAndUpdate(
        { _id: "orderId" },
        { $inc: { seq: 1 } }
      );
      if (!newOrderID) throw Error("Some things wrong on getting new order id");
      this.id = newOrderID.seq;
    }
  } catch (error) {
    throw error;
  }
});

const DepositModel = mongoose.connection
  .useDb("Deposit")
  .model<DepositDocument>("Deposit", DepositSchema);

export default DepositModel;
