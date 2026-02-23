import mongoose, { HydratedDocument } from "mongoose";
import GameModel from "./Game.model";
import PackageModel from "./Package.model";
import UserModel from "./User.model";
import SeqModel from "./Seq.model";

export interface Topup {
  game: mongoose.Types.ObjectId;

  package: mongoose.Types.ObjectId;
  price: number;
  currency?: string;
  status?: "pending" | "success" | "fail";
  Id?: CheckId;
  login?: Login;
  userID: mongoose.Types.ObjectId;
}
export interface CheckId {
  userID: string;
  zoneID: string;
  server?: string;
}
export interface Login {
  username: string;
  password: string;
  backupCode: string;
}

export type TopupDocument = HydratedDocument<Topup, { id: number }>;

const IdSchema = new mongoose.Schema<CheckId>(
  {
    userID: { type: String },
    zoneID: { type: String },
    server: { type: String },
  },
  { _id: false, versionKey: false },
);
const LoginSchema = new mongoose.Schema<Login>(
  {
    username: { type: String },
    password: { type: String },
    backupCode: { type: String },
  },
  { _id: false, versionKey: false },
);
const TopupSchema = new mongoose.Schema<TopupDocument>(
  {
    id: {
      type: Number,
      unique: true,
      index: true,
    },
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
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "UserModel",
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
    login: LoginSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

TopupSchema.pre("save", async function () {
  try {
    if (this.isNew) {
      const newID = await SeqModel.findByIdAndUpdate(
        { _id: "TopupId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true },
      );

      if (!newID) throw Error("Some things wrong on getting new order id");
      await PackageModel.findByIdAndUpdate(this.package, {
        $inc: { sold: 1 },
      });
      await GameModel.findByIdAndUpdate(this.game, {
        $inc: { sold: 1 },
      });
      this.id = newID.seq;
    } else {
    }
  } catch (error) {
    throw error;
  }
});

TopupSchema.pre("findOneAndUpdate", async function (doc) {
  try {
    const update = this.getUpdate() as { status: string };
    const topup = await this.model.findById(this.getQuery()._id);

    if (update && topup && topup.status != "pending") {
      if (update.status === "success") {
        await UserModel.findByIdAndUpdate(topup.userID, {
          $inc: { balance: -topup.price },
        });
      }
    }
    if (update.status === "fail") {
      await UserModel.findByIdAndUpdate(topup.userID, {
        $inc: { balance: topup.price },
      });
    }
  } catch (err) {
    throw err;
  }
});

const TopupsModel = mongoose.connection
  .useDb("Topup")
  .model<TopupDocument>("Topup", TopupSchema);

export default TopupsModel;
