import mongoose, { HydratedDocument } from "mongoose";
import Packages, { PackagesDocument } from "./Packages.model";

export interface Game {
  name: string;
  icon: string;
  about: string;
  check_id?: CheckId;
  login?: Login;
  palyStore: string;
  appStore: string;
  packages?: mongoose.Types.ObjectId[] | PackagesDocument[];
}
export interface CheckId {
  url: string;
  userID: boolean;
  zoneID: boolean;
  server: string[];
}

export interface Login {
  username: string;
  password: string;
  backupCode: string;
}
export type GameDocument = HydratedDocument<Game>;

const CheckIdSchema = new mongoose.Schema<CheckId>({
  url: { type: String },
  userID: { type: Boolean },
  zoneID: { type: Boolean },
  server: { type: [String] },
});

const LoginSchema = new mongoose.Schema<Login>({
  username: { type: String },
  password: { type: String },
  backupCode: { type: String },
});

const GameSchema = new mongoose.Schema<GameDocument>(
  {
    name: { type: String, require: true, index: true },
    icon: { type: String, require: true },
    about: { type: String, require: true },
    check_id: CheckIdSchema,
    login: LoginSchema,
    palyStore: { type: String, require: true },
    appStore: { type: String, require: true },
    packages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: Packages,
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
