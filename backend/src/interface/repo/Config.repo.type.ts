import { Config, ConfigDocument } from "../../model/Config.model";

export default interface ConfigRepoType {
  create(id: string): Promise<ConfigDocument>;
  getById(id: string): Promise<ConfigDocument>;
  updateById(id: string, data: Config): Promise<ConfigDocument>;
  deleteById(id: string): Promise<ConfigDocument>;
}
