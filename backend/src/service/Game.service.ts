import { UpdateQueryKnownOnly } from "mongoose";
import GameServiceType from "../interface/service/Game.service.type";
import { Game, GameDocument } from "../model/Game.model";
import GameRepo from "../repo/Game.repo";
import { HydratedDocument } from "mongoose";
import { Packages, PackagesDocument } from "../model/Packages.model";
import PackageService from "./Package.service";
import PackagesService from "./Packages.service";
import { Package, PackageDocument } from "../model/Package.model";

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
  async getGames(start: number, limit: number): Promise<GameDocument[]> {
    try {
      return await GameRepo.getMany(start, limit);
    } catch (error) {
      throw error;
    }
  }
  async updateGameInfo(
    id: string,
    update: UpdateQueryKnownOnly<Game>,
  ): Promise<GameDocument> {
    try {
      return await GameRepo.updateById(id, update);
    } catch (error) {
      throw error;
    }
  }
  async updateGame(id: string, data: GameDocument): Promise<GameDocument> {
    try {
      for (const packages of data.packages! as PackagesDocument[]) {
        for (const Package of packages.packages as PackageDocument[]) {
          await PackageService.updatePackage(Package._id.toString(), Package);
        }
        await PackagesService.updatepackages(packages._id.toString(), {
          $set: packages,
        });
      }
      const game = await GameRepo.updateById(id, data as any);
      return game;
    } catch (error) {
      throw error;
    }
  }
}

export default new GameService();
