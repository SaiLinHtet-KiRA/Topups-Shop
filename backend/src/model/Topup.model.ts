import mongoose, { HydratedDocument } from "mongoose";
import GameModel from "./Game.model";
import PackageModel from "./Package.model";

export interface Topup {
  game: mongoose.Schema.Types.ObjectId;
  package: mongoose.Schema.Types.ObjectId;
  price: number;
  currency?: string;
  status?: "pending" | "success" | "fail";
  Id: CheckId;
}
interface CheckId {
  userId: string;
  zoneId: string;
}

export type TopupDocument = HydratedDocument<Topup>;

const IdSchema = new mongoose.Schema<CheckId>(
  { userId: { type: String }, zoneId: { type: String } },
  { _id: false, versionKey: false },
);

const TopupSchema = new mongoose.Schema<TopupDocument>(
  {
    game: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: GameModel,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: PackageModel,
    },
    price: {
      type: Number,
      require: true,
    },
    currency: {
      type: String,
      require: true,
      default: "MMK",
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "success", "fail"],
    },
    Id: IdSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const TopupsModel = mongoose.connection
  .useDb("Topup")
  .model<TopupDocument>("Topup", TopupSchema);

export default TopupsModel;
