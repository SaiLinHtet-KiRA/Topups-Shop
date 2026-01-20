import mongoose, { HydratedDocument } from "mongoose";
import { GameDocument } from "./Game.model";

export interface Package {
  name: string;
  icon: string;
  game: mongoose.Types.ObjectId | GameDocument;
  sold: number;
  old_price: number;
  new_price: number;
  createdAt?: Date;
  upatedAt?: Date;
}

export type PackageDocument = HydratedDocument<Package>;

const PackageSchema = new mongoose.Schema<PackageDocument>(
  {
    name: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Game",
    },
    sold: {
      type: Number,
      default: 0,
    },
    old_price: {
      type: Number,
      require: true,
    },
    new_price: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const PackageModel = mongoose.connection
  .useDb("Package")
  .model<PackageDocument>("Package", PackageSchema);

export default PackageModel;
