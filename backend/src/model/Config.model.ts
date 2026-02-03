import mongoose, { HydratedDocument } from "mongoose";

export interface Config {
  value: string;
}

export type ConfigDocument = HydratedDocument<Config>;

const ConfigSchema = new mongoose.Schema<ConfigDocument>(
  {
    _id: String,
    value: { type: String },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const ConfigModel = mongoose.connection
  .useDb("Config")
  .model<ConfigDocument>("Config", ConfigSchema);

export default ConfigModel;
