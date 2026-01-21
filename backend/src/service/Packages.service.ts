import { UpdateQueryKnownOnly } from "mongoose";
import PackagesServiceType from "../interface/service/Packages.service.type";
import { Packages, PackagesDocument } from "../model/Packages.model";
import PackagesRepo from "../repo/Packages.repo";

class PackagesService implements PackagesServiceType {
  async createPackages(data: Packages): Promise<PackagesDocument> {
    try {
      return await PackagesRepo.create(data);
    } catch (error) {
      throw error;
    }
  }
  async getPackagesById(id: string): Promise<PackagesDocument> {
    try {
      return await PackagesRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
  async updatepackages(
    id: string,
    data: UpdateQueryKnownOnly<PackagesDocument>,
  ): Promise<PackagesDocument> {
    try {
      return await PackagesRepo.updateById(id, data);
    } catch (error) {
      throw error;
    }
  }
}
export default new PackagesService();
