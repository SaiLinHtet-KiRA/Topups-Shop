import { Document, HydratedDocument, UpdateQueryKnownOnly } from "mongoose";
import GameRepoType from "../interface/repo/Game.repo.type";
import GameModel, { Game, GameDocument } from "../model/Game.model";
import { NotFoundError } from "../util/error/errors";

class GameRepo implements GameRepoType {
  async create(Game: Game): Promise<HydratedDocument<GameDocument>> {
    try {
      const newGame = new GameModel(Game);
      return await newGame.save();
    } catch (error) {
      throw error;
    }
  }

  async findByRegex(
    field: keyof GameDocument,
    pattern: string,
  ): Promise<GameDocument[]> {
    try {
      const packages = await GameModel.find({
        [field]: { $regex: pattern, $options: "ui" },
      });

      return packages;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<GameDocument> {
    try {
      const game = await GameModel.findById(id);
      if (!game) throw new NotFoundError(`Game Id-${id} was not founded`);
      return game;
    } catch (error) {
      throw error;
    }
  }
  async getMany(start: number, limit: number): Promise<GameDocument[]> {
    try {
      return await GameModel.find()
        .skip((start - 1) * limit)
        .limit(limit);
    } catch (error) {
      throw error;
    }
  }
  async updateById(
    id: string,
    update: UpdateQueryKnownOnly<GameDocument>,
  ): Promise<GameDocument> {
    try {
      const game = await GameModel.findByIdAndUpdate(id, update);
      if (!game) throw new NotFoundError(`Game Id-${id} was not founded`);
      return game;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<GameDocument> {
    try {
      const game = await GameModel.findByIdAndDelete(id);
      if (!game) throw new NotFoundError(`Game Id-${id} was not founded`);
      return game;
    } catch (error) {
      throw error;
    }
  }
}

export default new GameRepo();
