import mongoose, { HydratedDocument } from "mongoose";
import TopupsModel from "./Topup.model";
import DepositModel from "./Deposit.model";

export interface User {
  id: string;
  banned: boolean;
  balance: number;
  recharges: mongoose.Schema.Types.ObjectId[];
  topups: mongoose.Schema.Types.ObjectId[];
  numRecharges: number;
  numTopups: number;
  role: "user" | "admin";
}

export type UserDocument = HydratedDocument<User>;

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    id: {
      type: String,
      require: true,
      index: true,
      unique: true,
    },
    recharges: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: DepositModel,
      default: [],
    },
    numRecharges: {
      type: Number,
      default: 0,
    },
    topups: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: TopupsModel,
      default: [],
    },
    numTopups: {
      type: Number,
      default: 0,
    },
    banned: {
      type: Boolean,
      default: false,
      indexedDB: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const UserModel = mongoose.connection
  .useDb("User")
  .model<UserDocument>("User", UserSchema);

export default UserModel;
