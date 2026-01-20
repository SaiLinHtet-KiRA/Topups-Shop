import { UpdateQueryKnownOnly } from "mongoose";
import { PackagesDocument } from "../../model/Packages.model";

export default interface PackagesServiceType {
  createPackages(data: PackagesDocument): Promise<PackagesDocument>;
  getPackagesById(id: string): Promise<PackagesDocument>;
  updatepackages(
    id: string,
    data: UpdateQueryKnownOnly<PackagesDocument>,
  ): Promise<PackagesDocument>;
}
