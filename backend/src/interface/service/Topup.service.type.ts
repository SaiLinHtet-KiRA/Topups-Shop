import { TopupDocument, Topup } from "../../model/Topup.model";

export default interface TopupServiceType {
  createTopup(data: Topup): Promise<TopupDocument>;
  getTopup(id: string): Promise<TopupDocument>;
  getTopups(page: number, limit: number): Promise<TopupDocument[]>;
  updateTopup(id: string, data: TopupDocument): Promise<TopupDocument>;
  deleteTopup(id: string): Promise<TopupDocument>;
}
