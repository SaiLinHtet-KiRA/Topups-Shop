import mongoose, { HydratedDocument } from "mongoose";
import { PackageDocument } from "./Package.model";

export interface Packages {
  name: string;
  packages: mongoose.Types.ObjectId[];
}
export type PackagesDocument = HydratedDocument<Packages>;

const PackagsSchema = new mongoose.Schema<PackagesDocument>(
  {
    name: { type: String, require: true },
    packages: [mongoose.Schema.Types.ObjectId],
  },
  { timestamps: false, _id: false, versionKey: false },
);

const PackagesModel = mongoose.connection
  .useDb("Packages")
  .model<PackagesDocument>("Packages", PackagsSchema);

export default PackagesModel;
