import { Util, UtilDocument } from "../Util.model";

export default interface ConfigServiceType {
  findOrCreate(id: string, data: Util): Promise<UtilDocument>;
  getConfigById(id: string): Promise<UtilDocument>;
  deleteById(id: string): Promise<UtilDocument>;
}
