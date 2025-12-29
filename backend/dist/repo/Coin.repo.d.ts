import { CoinRepoInterface } from "interface/repo/Coin.repo.interface";
import Coin, { collection, RawCoin } from "interface/types/Coin";
export default class CoinRepo implements CoinRepoInterface {
    create(data: RawCoin, collection: collection): Promise<void>;
    get(collection: collection): Promise<Coin[]>;
    getByid(id: string, collection: collection): Promise<Coin | null>;
    delete(id: string, collection: collection): Promise<void>;
}
