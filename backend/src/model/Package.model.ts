import mongoose from "mongoose";

export interface PackageDocument extends mongoose.Document {
  name: string;
  icon: string;
  game: mongoose.Schema.Types.ObjectId;
  sold: number;
  price: number;
  createdAt: Date;
  upatedAt: Date;
}

const PackageSchema = new mongoose.Schema(
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
    price: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PackageModel = mongoose.connection
  .useDb("Package")
  .model<PackageDocument>("Package", PackageSchema);

export default PackageModel;
