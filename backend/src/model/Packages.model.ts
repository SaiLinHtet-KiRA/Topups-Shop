import mongoose from "mongoose";
import { PackageDocument } from "./Package.model";

export interface PackagesDocument extends Omit<mongoose.Document, "_id"> {
  name: string;
  packages: mongoose.Schema.Types.ObjectId[] | PackageDocument[];
}

const PackagsSchema = new mongoose.Schema<PackagesDocument>(
  {
    name: { type: String, require: true },
    packages: [mongoose.Schema.Types.ObjectId],
  },
  { timestamps: false, _id: false, versionKey: false }
);

const PackagesModel = mongoose.connection
  .useDb("Packages")
  .model<PackagesDocument>("Packages", PackagsSchema);

export default PackagesModel;
