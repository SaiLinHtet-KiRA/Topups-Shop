import mongoose, { HydratedDocument } from "mongoose";
import { PackagesDocument } from "./Packages.model";

export interface Game {
  name: string;
  icon: string;
  about: string;
  check_id_url: string;
  palyStore: string;
  appStore: string;
  packages?: mongoose.Types.ObjectId[];
  createdAt?: Date;
  upatedAt?: Date;
}

export type GameDocument = HydratedDocument<Game>;

const GameSchema = new mongoose.Schema<GameDocument>(
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
  },
);

const GameModel = mongoose.connection
  .useDb("Game")
  .model<GameDocument>("Game", GameSchema);

export default GameModel;
