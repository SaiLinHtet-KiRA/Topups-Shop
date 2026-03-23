import mongoose from "mongoose";

export interface SeqDocument extends mongoose.Document {
  seq: number;
}

const SeqSchema = new mongoose.Schema(
  {
    _id: String,
    seq: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const SeqModel = mongoose.connection
  .useDb("Records")
  .model<SeqDocument>("Seq", SeqSchema);

export default SeqModel;
