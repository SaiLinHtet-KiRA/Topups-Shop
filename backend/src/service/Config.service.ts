import ConfigServiceType from "../interface/service/Config.service.type";
import { ConfigDocument, Config } from "../model/Config.model";
import ConfigRepo from "../repo/Config.repo";

class ConfigService implements ConfigServiceType {
  async findOrCreate(id: string, data: Config): Promise<ConfigDocument> {
    try {
      return await ConfigRepo.getById(id);
    } catch (error) {
      return await ConfigRepo.updateById(id, data);
    }
  }
  async deleteById(id: string): Promise<ConfigDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getConfigById(id: string): Promise<ConfigDocument> {
    try {
      return await ConfigRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
}

export default new ConfigService();
