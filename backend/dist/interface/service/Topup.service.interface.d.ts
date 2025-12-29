import TopupDto from "../../dto/Topup.dto";
import fullTopup from "../types/Topup";
export interface TopupServiceInterface {
    createTopup(data: TopupDto): Promise<fullTopup>;
    getTopups(user_id: string): Promise<number[]>;
    getTopup(id: string): Promise<fullTopup>;
    deleteTopup(id: string): Promise<fullTopup>;
}
