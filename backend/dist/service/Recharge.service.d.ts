import RechargeDto from "../dto/Recharge.dto";
import Recharge from "../interface/types/Recharge";
import { RechargeServiceInterface } from "../interface/service/Recharge.service.interface";
export default class RechargeService implements RechargeServiceInterface {
    createRecharge(data: RechargeDto): Promise<Recharge>;
    getRecharges(): Promise<Recharge[]>;
    getRecharge(id: number): Promise<Recharge>;
    deleteRecharge(id: number): Promise<Recharge>;
}
