import mongoose, { HydratedDocument } from "mongoose";
import TopupsModel from "./Topup.model";
import DepositModel from "./Deposit.model";

export interface User {
  id: string;
  banned: boolean;
  balance: number;
  receipt: mongoose.Schema.Types.ObjectId[];
  topups: mongoose.Schema.Types.ObjectId[];
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
    receipt: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: DepositModel,
      default: [],
    },
    topups: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: TopupsModel,
      default: [],
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
