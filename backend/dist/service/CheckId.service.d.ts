import UserID from "../interface/types/UserID";
import { type CheckIDServiceInterface } from "../interface/service/CheckId.service.interface";
export default class CheckID implements CheckIDServiceInterface {
    mobilelegends(id: UserID): Promise<{
        code: number;
        username: string;
    }>;
}
