import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  id: string;
  banned: boolean;
  balance: number;
  deposits: mongoose.Schema.Types.ObjectId[];
}

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    id: {
      type: String,
      require: true,
      index: true,
      unique: true,
    },
    deposits: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Deposit",
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.connection
  .useDb("User")
  .model<UserDocument>("User", UserSchema);

export default UserModel;
