"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../model/game"));
class GameRepo {
    async create(data) {
        try {
            const newGame = new game_1.default(data);
            await newGame.save();
        }
        catch (error) {
            throw error;
        }
    }
    async get() {
        try {
            return await game_1.default.find();
        }
        catch (error) {
            throw error;
        }
    }
    async getByid(id) {
        try {
            return await game_1.default.findById(id);
        }
        catch (error) {
            throw error;
        }
    }
    async getByName(name) {
        try {
            return await game_1.default.findOne({ name });
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await game_1.default.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = GameRepo;
//# sourceMappingURL=Game.repo.js.map