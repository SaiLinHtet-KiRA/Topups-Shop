"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coin_1 = __importDefault(require("../model/coin"));
class CoinRepo {
    async create(data, collection) {
        try {
            const newGame = new ((0, coin_1.default)(collection))(data);
            await newGame.save();
        }
        catch (error) {
            throw error;
        }
    }
    async get(collection) {
        try {
            return await (0, coin_1.default)(collection).find();
        }
        catch (error) {
            throw error;
        }
    }
    async getByid(id, collection) {
        try {
            return await (0, coin_1.default)(collection).findById(id);
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id, collection) {
        try {
            await (0, coin_1.default)(collection).findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = CoinRepo;
//# sourceMappingURL=Coin.repo.js.map