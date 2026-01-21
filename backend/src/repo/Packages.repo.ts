import { UpdateQueryKnownOnly } from "mongoose";
import PackagesRepoType from "../interface/repo/Packages.repo.type";
import PackagesModel, {
  Packages,
  PackagesDocument,
} from "../model/Packages.model";
import { NotFoundError } from "../util/error/errors";

class PackagesRepo implements PackagesRepoType {
  async create(data: Packages): Promise<PackagesDocument> {
    try {
      const newPackages = new PackagesModel(data);
      return await newPackages.save();
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<PackagesDocument> {
    try {
      const packages = await PackagesModel.findById(id);
      if (!packages)
        throw new NotFoundError(`Packages Id-${id} was not founded`);
      return packages;
    } catch (error) {
      throw error;
    }
  }
  async updateById(
    id: string,
    update: UpdateQueryKnownOnly<PackagesDocument>,
  ): Promise<PackagesDocument> {
    try {
      const packages = await PackagesModel.findByIdAndUpdate(id, update);
      if (!packages)
        throw new NotFoundError(`Packages Id-${id} was not founded`);
      return packages;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<PackagesDocument> {
    try {
      const packages = await PackagesModel.findByIdAndDelete(id);
      if (!packages)
        throw new NotFoundError(`Packages Id-${id} was not founded`);
      return packages;
    } catch (error) {
      throw error;
    }
  }
}

export default new PackagesRepo();
