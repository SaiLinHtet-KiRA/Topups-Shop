import mongoose, { HydratedDocument } from "mongoose";
import SeqModel from "./Seq.model";
import UserModel from "./User.model";

export interface Deposit {
  id: number;
  userID: mongoose.Schema.Types.ObjectId;
  amount: number;
  status: "pending" | "success" | "fail";
  createdAt: Date;
  upatedAt: Date;
  name: string;
  banking: string;
}

export type DepositDocument = HydratedDocument<Deposit>;

const DepositSchema = new mongoose.Schema<DepositDocument>(
  {
    id: {
      type: Number,
      require: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    banking: {
      type: String,
      require: true,
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
  },
);

DepositSchema.pre("save", async function () {
  try {
    if (this.isNew) {
      const newOrderID = await SeqModel.findByIdAndUpdate(
        { _id: "orderId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true },
      );

      if (!newOrderID) throw Error("Some things wrong on getting new order id");
      await UserModel.findByIdAndUpdate(this.userID, {
        $push: { recharges: this._id },
        $inc: { numReceipts: 1 },
      });
      this.id = newOrderID.seq;
    } else {
    }
  } catch (error) {
    throw error;
  }
});
DepositSchema.pre("findOneAndUpdate", async function (doc) {
  try {
    const update = this.getUpdate() as { status: string };
    const deposit = await this.model.findById(this.getQuery()._id);
    if (update && deposit) {
      if (update.status === "success") {
        await UserModel.findByIdAndUpdate(deposit.userID, {
          $inc: { balance: deposit.amount, totalBalance: deposit.amount },
        });
      } else if (update.status === "fail") {
        await UserModel.findByIdAndUpdate(deposit.userID, {
          $inc: { balance: -deposit.amount, totalBalance: -deposit.amount },
        });
      }
    }
  } catch (err) {
    throw err;
  }
});

const DepositModel = mongoose.connection
  .useDb("Deposit")
  .model<DepositDocument>("Deposit", DepositSchema);

export default DepositModel;
