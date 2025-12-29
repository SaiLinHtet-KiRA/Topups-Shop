"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../util/error/errors");
const repo_1 = require("../repo");
class CoinService {
    async createCoin(data, collection) {
        try {
            await repo_1.coinRepo.create(data, collection);
        }
        catch (error) {
            throw error;
        }
    }
    async getCoins(collection) {
        try {
            return await repo_1.coinRepo.get(collection);
        }
        catch (error) {
            throw new errors_1.APIError("Some thing went wrong");
        }
    }
    async getCoinById(id, collection) {
        try {
            const existGame = await repo_1.coinRepo.getByid(id, collection);
            if (!existGame)
                throw new errors_1.NotFoundError("Game is not found");
            return existGame;
        }
        catch (error) {
            console.log(error);
            throw new errors_1.APIError("Some thing went wrong");
        }
    }
}
exports.default = CoinService;
//# sourceMappingURL=Coin.service.js.map