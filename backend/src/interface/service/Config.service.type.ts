import { Config, ConfigDocument } from "../../model/Config.model";

export default interface ConfigServiceType {
  findOrCreate(id: string, data: Config): Promise<ConfigDocument>;
  getConfigById(id: string): Promise<ConfigDocument>;
  deleteById(id: string): Promise<ConfigDocument>;
}
