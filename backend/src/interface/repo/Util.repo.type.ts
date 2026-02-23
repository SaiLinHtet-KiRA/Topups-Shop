import { Util, UtilDocument } from "../../model/Util.model";

export default interface UtilRepoType {
  create(id: string): Promise<UtilDocument>;
  getById(id: string): Promise<UtilDocument>;
  updateById(id: string, data: Util): Promise<UtilDocument>;
  deleteById(id: string): Promise<UtilDocument>;
}
