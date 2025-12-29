import RechargeDto from "dto/Recharge.dto";
import Recharge from "../../interface/types/Recharge";
export interface RechargeServiceInterface {
    createRecharge(data: RechargeDto): Promise<Recharge>;
    getRecharges(): Promise<Recharge[]>;
    getRecharge(id: number): Promise<Recharge>;
    deleteRecharge(id: number): Promise<Recharge>;
}
