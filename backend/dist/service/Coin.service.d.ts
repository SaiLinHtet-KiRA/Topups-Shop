import { CoinServiceInterface } from "../interface/service/Coin.service.interface";
import Coin, { collection, RawCoin } from "../interface/types/Coin";
export default class CoinService implements CoinServiceInterface {
    createCoin(data: RawCoin, collection: collection): Promise<void>;
    getCoins(collection: collection): Promise<Coin[]>;
    getCoinById(id: string, collection: collection): Promise<Coin>;
}
