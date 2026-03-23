import mongoose, { HydratedDocument } from "mongoose";
import { TopupsModel, DepositsModel } from "../records/Records.model";

export interface User {
  id: string;
  username: string;
  banned: boolean;
  balance: number;
  totalBalance: number;
  recharges: mongoose.Types.ObjectId;
  topups: mongoose.Types.ObjectId;
  role: "user" | "admin" | "owner";
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
    username: {
      type: String,
      require: true,
      default: "User Name",
    },
    recharges: {
      type: mongoose.Types.ObjectId,
      ref: DepositsModel,
    },
    topups: {
      type: mongoose.Types.ObjectId,
      ref: TopupsModel,
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
    totalBalance: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin", "owner"],
      default: "user",
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

UserSchema.pre("save", async function () {
  try {
    if (this.isNew) {
      const newDeposits = new DepositsModel({});
      const newTopups = new TopupsModel({});
      this.recharges = (await newDeposits.save())._id;
      this.topups = (await newTopups.save())._id;
    }
  } catch (error) {
    throw error;
  }
});

const UserModel = mongoose.connection
  .useDb("User")
  .model<UserDocument>("User", UserSchema);

export default UserModel;
