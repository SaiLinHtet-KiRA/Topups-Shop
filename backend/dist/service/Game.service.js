"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../util/error/errors");
const repo_1 = require("../repo");
class GameService {
    async createGame(data) {
        try {
            await repo_1.gameRepo.create(data);
        }
        catch (error) {
            throw error;
        }
    }
    async getGames() {
        try {
            return await repo_1.gameRepo.get();
        }
        catch (error) {
            throw new errors_1.APIError("Some thing went wrong");
        }
    }
    async getGameById(id) {
        try {
            const existGame = await repo_1.gameRepo.getByid(id);
            if (!existGame)
                throw new errors_1.NotFoundError("Game is not found");
            return existGame;
        }
        catch (error) {
            console.log(error);
            throw new errors_1.APIError("Some thing went wrong");
        }
    }
    async getGameByName(name) {
        try {
            return await repo_1.gameRepo.getByName(name);
        }
        catch (error) {
            throw new errors_1.APIError("Some thing went wrong");
        }
    }
}
exports.default = GameService;
//# sourceMappingURL=Game.service.js.map