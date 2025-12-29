import { RechargeRepoInterface } from "../interface/repo";
import Recharge, { RawRecharge } from "../interface/types/Recharge";
export default class RechargeRepo implements RechargeRepoInterface {
    create(data: RawRecharge): Promise<Recharge>;
    get(): Promise<Recharge[]>;
    getByid(id: number): Promise<Recharge>;
    delete(id: number): Promise<Recharge>;
}
