import mongoose, { HydratedDocument } from "mongoose";

export interface Util {
  value: string;
}

export type UtilDocument = HydratedDocument<Util>;

const UtilSchema = new mongoose.Schema<UtilDocument>(
  {
    _id: String,
    value: { type: String },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const UtilModel = mongoose.connection
  .useDb("Util")
  .model<UtilDocument>("Util", UtilSchema);

export default UtilModel;
