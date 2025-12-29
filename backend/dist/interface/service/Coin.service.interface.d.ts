import Coin, { collection, RawCoin } from "../types/Coin";
export interface CoinServiceInterface {
    createCoin(data: RawCoin, collection: collection): Promise<void>;
    getCoins(collection: collection): Promise<Coin[]>;
    getCoinById(id: String, collection: collection): Promise<Coin>;
}
