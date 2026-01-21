import PackageServiceType from "../interface/service/Package.service.type";
import { PackageDocument } from "../model/Package.model";
import PackageRepo from "../repo/Package.repo";

class PackageService implements PackageServiceType {
  async createPackage(data: PackageDocument): Promise<PackageDocument> {
    try {
      return await PackageRepo.create(data);
    } catch (error) {
      throw error;
    }
  }
  async searchByField(
    field: keyof PackageDocument,
    pattern: string,
  ): Promise<PackageDocument[]> {
    try {
      return await PackageRepo.findByRegex(field, pattern);
    } catch (error) {
      throw error;
    }
  }

  async getPackages(page: number, limit: number): Promise<PackageDocument[]> {
    try {
      return await PackageRepo.getMany(page, limit);
    } catch (error) {
      throw error;
    }
  }

  async getPackage(id: string): Promise<PackageDocument> {
    try {
      return await PackageRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }

  async updatePackage(
    id: string,
    data: PackageDocument,
  ): Promise<PackageDocument> {
    try {
      return await PackageRepo.updateById(id, data);
    } catch (error) {
      throw error;
    }
  }
}

export default new PackageService();
