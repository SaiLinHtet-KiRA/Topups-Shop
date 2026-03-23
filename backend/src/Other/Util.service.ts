import UtilServiceType from "./types/Util.service.type";
import { UtilDocument, Util } from "./Util.model";
import ConfigRepo from "./Util.repo";

class ConfigService implements UtilServiceType {
  async findOrCreate(id: string, data: Util): Promise<UtilDocument> {
    try {
      return await ConfigRepo.getById(id);
    } catch (error) {
      return await ConfigRepo.updateById(id, data);
    }
  }
  async deleteById(id: string): Promise<UtilDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getConfigById(id: string): Promise<UtilDocument> {
    try {
      return await ConfigRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
}

export default new ConfigService();
