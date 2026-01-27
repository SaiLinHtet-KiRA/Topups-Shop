import { Topup, TopupDocument } from "../../model/Topup.model";

export default interface TopupRepoType {
  creat(data: Topup): Promise<TopupDocument>;
  getById(id: string): Promise<TopupDocument>;
  getMany(start: number, limit: number): Promise<TopupDocument[]>;
  updateById(id: string, data: Topup): Promise<TopupDocument>;
  deleteById(id: string): Promise<TopupDocument>;
}
