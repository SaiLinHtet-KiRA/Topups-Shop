import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  id: number;
  banned: boolean;
}

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
      index: true,
      unique: true,
    },
    banned: {
      type: Boolean,
      default: false,
      indexedDB: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.connection
  .useDb("User")
  .model<UserDocument>("User", userSchema);

export default UserModel;
