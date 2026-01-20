import { UpdateQueryKnownOnly } from "mongoose";
import GameServiceType from "../interface/service/Game.service.type";
import { Game, GameDocument } from "../model/Game.model";
import GameRepo from "../repo/Game.repo";
import { HydratedDocument } from "mongoose";

class GameService implements GameServiceType {
  async createGame(info: Game): Promise<HydratedDocument<GameDocument>> {
    try {
      return await GameRepo.create(info);
    } catch (error) {
      throw error;
    }
  }
  async searchByField(
    field: keyof GameDocument,
    pattern: string,
  ): Promise<GameDocument[]> {
    try {
      return await GameRepo.findByRegex(field, pattern);
    } catch (error) {
      throw error;
    }
  }
  async getGame(id: string): Promise<GameDocument> {
    try {
      return await GameRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
  async updateGame(
    id: string,
    update: UpdateQueryKnownOnly<GameDocument>,
  ): Promise<GameDocument> {
    try {
      return await GameRepo.updateById(id, update);
    } catch (error) {
      throw error;
    }
  }
}

export default new GameService();
