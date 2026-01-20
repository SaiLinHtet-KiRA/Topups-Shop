import { PackageDocument } from "../../model/Package.model";

export default interface PackageServiceType {
  createPackage(data: PackageDocument): Promise<PackageDocument>;
  searchByField(
    field: keyof PackageDocument,
    pattern: string,
  ): Promise<PackageDocument[]>;
  getPackage(id: string): Promise<PackageDocument>;
  updatePackage(id: string, data: PackageDocument): Promise<PackageDocument>;
}
