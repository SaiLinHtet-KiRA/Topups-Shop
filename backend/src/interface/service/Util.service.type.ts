import { Util, UtilDocument } from "../../model/Util.model";

export default interface ConfigServiceType {
  findOrCreate(id: string, data: Util): Promise<UtilDocument>;
  getConfigById(id: string): Promise<UtilDocument>;
  deleteById(id: string): Promise<UtilDocument>;
}
