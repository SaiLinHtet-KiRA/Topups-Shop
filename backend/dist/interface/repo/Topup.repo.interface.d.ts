import fullTopup, { RawTopup } from "../types/Topup";
export interface TopupRepoInterface {
    create(data: RawTopup): Promise<fullTopup>;
    get(user_id: string): Promise<number[] | null>;
    getByid(id: string): Promise<fullTopup | null>;
    delete(id: string): Promise<fullTopup>;
}
