import { TopupRepoInterface } from "../interface/repo/Topup.repo.interface";
import fullTopup, { RawTopup } from "../interface/types/Topup";
export default class TopupRepo implements TopupRepoInterface {
    create(data: RawTopup): Promise<fullTopup>;
    get(user_id: string): Promise<number[]>;
    getByid(id: string): Promise<fullTopup | null>;
    delete(id: string): Promise<fullTopup>;
}
