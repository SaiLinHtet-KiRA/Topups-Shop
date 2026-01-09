import mongoose from "mongoose";

export interface TopupDocument extends mongoose.Document {
  game: mongoose.Schema.Types.ObjectId;
  package: mongoose.Schema.Types.ObjectId;
  status: "pending" | "success" | "fail";
  createdAt: Date;
  upatedAt: Date;
}

const TopupSchema = new mongoose.Schema(
  {
    game: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "success", "fail"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TopupsModel = mongoose.connection
  .useDb("Topup")
  .model<TopupDocument>("Topup", TopupSchema);

export default TopupsModel;
