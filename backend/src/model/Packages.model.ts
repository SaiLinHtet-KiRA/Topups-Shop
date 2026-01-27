import mongoose, { HydratedDocument } from "mongoose";
import Package, { PackageDocument } from "./Package.model";

export interface Packages {
  name: string;
  packages: mongoose.Types.ObjectId[] | PackageDocument[];
}
export type PackagesDocument = HydratedDocument<Packages>;

const PackagsSchema = new mongoose.Schema<PackagesDocument>(
  {
    name: { type: String, require: true },
    packages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: Package,
    },
  },
  { timestamps: false, versionKey: false },
);

const PackagesModel = mongoose.connection
  .useDb("Package")
  .model<PackagesDocument>("PackageSection", PackagsSchema);

export default PackagesModel;
