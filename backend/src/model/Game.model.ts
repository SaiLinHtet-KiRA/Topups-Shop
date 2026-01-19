import mongoose from "mongoose";
import { PackageDocument } from "./Package.model";

export interface GameDocument extends mongoose.Document {
  name: string;
  icon: string;
  packages: PackageDocument[];
  createdAt: Date;
  upatedAt: Date;
}

const GameSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    icon: { type: String, require: true },
    about: { type: String, require: true },
    check_id_url: { type: String },
    palyStore: { type: String, require: true },
    appStore: { type: String, require: true },
    packages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Packages",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const GametModel = mongoose.connection
  .useDb("Game")
  .model<GameDocument>("Game", GameSchema);

export default GametModel;
