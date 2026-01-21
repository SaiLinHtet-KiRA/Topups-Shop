import { PackageDocument } from "../../model/Package.model";

export default interface PackageRepo {
  create(info: PackageDocument): Promise<PackageDocument>;
  getById(id: string): Promise<PackageDocument>;
  getMany(start: number, limit: number): Promise<PackageDocument[]>;
  findByRegex(
    field: keyof PackageDocument,
    pattern: string,
  ): Promise<PackageDocument[]>;
  updateById(id: string, data: PackageDocument): Promise<PackageDocument>;
  deleteById(id: string): Promise<PackageDocument>;
}
