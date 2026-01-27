import PackageRepoType from "../interface/repo/Package.repo.type";
import GameModel from "../model/Game.model";
import PackageModel, { PackageDocument } from "../model/Package.model";
import { NotFoundError } from "../util/error/errors";

class Package implements PackageRepoType {
  async create(info: PackageDocument): Promise<PackageDocument> {
    try {
      const newPackages = new PackageModel(info);
      return await newPackages.save();
    } catch (error) {
      throw error;
    }
  }

  async findByRegex(
    field: keyof PackageDocument,
    pattern: string,
  ): Promise<PackageDocument[]> {
    try {
      const packages = await PackageModel.find({
        [field]: { $regex: pattern, $options: "i" },
      });
      return packages;
    } catch (error) {
      throw error;
    }
  }

  async getMany(start: number, limit: number): Promise<PackageDocument[]> {
    try {
      return await PackageModel.find()
        .sort({ sold: 1 })
        .skip(start * limit)
        .limit(limit)
        .populate({ path: "game", model: GameModel });
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<PackageDocument> {
    try {
      const Package = await PackageModel.findById(id);
      if (!Package) throw new NotFoundError(`Package Id-${id} was not founded`);
      return Package;
    } catch (error) {
      throw error;
    }
  }

  async updateById(
    id: string,
    data: PackageDocument,
  ): Promise<PackageDocument> {
    try {
      const Package = await PackageModel.findByIdAndUpdate(id, data);
      if (!Package) throw new NotFoundError(`Package Id-${id} was not founded`);
      return Package;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<PackageDocument> {
    try {
      const Package = await PackageModel.findByIdAndDelete(id);
      if (!Package) throw new NotFoundError(`Package Id-${id} was not founded`);
      return Package;
    } catch (error) {
      throw error;
    }
  }
}

export default new Package();
