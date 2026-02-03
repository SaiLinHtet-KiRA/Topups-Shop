import ConfigRepoType from "../interface/repo/Config.repo.type";
import ConfigModel, { ConfigDocument, Config } from "../model/Config.model";
import { NotFoundError } from "../util/error/errors";

class ConfigRepo implements ConfigRepoType {
  async create(id: string): Promise<ConfigDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<ConfigDocument> {
    try {
      const config = await ConfigModel.findById(id);
      if (!config) throw new NotFoundError(`Config id-${id} is not found`);
      return config;
    } catch (error) {
      throw error;
    }
  }
  async updateById(id: string, data: Config): Promise<ConfigDocument> {
    try {
      return await ConfigModel.findByIdAndUpdate(id, data, {
        new: true,
        upsert: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<ConfigDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}

export default new ConfigRepo();
