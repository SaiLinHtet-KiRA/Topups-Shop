import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  id: string;
  banned: boolean;
  balance: number;
}

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      index: true,
      unique: true,
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
