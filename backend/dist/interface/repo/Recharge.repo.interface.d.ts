import Recharge, { RawRecharge } from "../types/Recharge";
export interface RechargeRepoInterface {
    create(data: RawRecharge): Promise<Recharge>;
    get(): Promise<Recharge[]>;
    getByid(id: number): Promise<Recharge>;
    delete(id: number): Promise<Recharge>;
}
