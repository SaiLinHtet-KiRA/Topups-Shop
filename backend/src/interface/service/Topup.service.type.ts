import { TopupDocument, Topup } from "../../model/Topup.model";
import TopupDto from "../../interface/dto/Topup.dto";

export default interface TopupServiceType {
  createTopup(userId: string, data: TopupDto): Promise<TopupDocument>;
  getTopup(id: string): Promise<TopupDocument>;
  getTopups(page: number, limit: number): Promise<TopupDocument[]>;
  updateTopup(id: string, data: TopupDocument): Promise<TopupDocument>;
  deleteTopup(id: string): Promise<TopupDocument>;
}
