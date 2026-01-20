import { UpdateQueryKnownOnly } from "mongoose";
import { PackagesDocument } from "../../model/Packages.model";

export default interface PackagesRepo {
  create(data: PackagesDocument): Promise<PackagesDocument>;
  getById(id: string): Promise<PackagesDocument>;
  updateById(
    id: string,
    update: UpdateQueryKnownOnly<PackagesDocument>,
  ): Promise<PackagesDocument>;
  deleteById(id: string): Promise<PackagesDocument>;
}
