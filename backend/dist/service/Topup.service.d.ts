import TopupDto from "../dto/Topup.dto";
import fullTopup from "../interface/types/Topup";
import { TopupServiceInterface } from "../interface/service/Topup.service.interface";
export default class TopueService implements TopupServiceInterface {
    createTopup(data: TopupDto): Promise<fullTopup>;
    getTopups(user_id: string): Promise<number[]>;
    getTopup(id: string): Promise<fullTopup>;
    deleteTopup(id: string): Promise<fullTopup>;
}
