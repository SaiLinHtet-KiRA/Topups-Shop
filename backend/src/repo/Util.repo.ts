import UtilRepoType from "../interface/repo/Util.repo.type";
import ConfigModel, { UtilDocument, Util } from "../model/Util.model";
import { NotFoundError } from "../util/error/errors";

class UtilRepo implements UtilRepoType {
  async create(id: string): Promise<UtilDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<UtilDocument> {
    try {
      const config = await ConfigModel.findById(id);
      if (!config) throw new NotFoundError(`Config id-${id} is not found`);
      return config;
    } catch (error) {
      throw error;
    }
  }
  async updateById(id: string, data: Util): Promise<UtilDocument> {
    try {
      return await ConfigModel.findByIdAndUpdate(id, data, {
        new: true,
        upsert: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<UtilDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}

export default new UtilRepo();
