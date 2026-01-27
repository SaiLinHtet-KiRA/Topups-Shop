import { Request, Response } from "express";
import GameControllerType from "../interface/controller/Game.controller.type";
import GameService from "../service/Game.service";

class GameController implements GameControllerType {
  async getGames(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      const { page, limit } = req.query;
      const games = await GameService.getGames(page, limit);

      res.status(200).json(games);
    } catch (error) {
      throw error;
    }
  }
  async getGame(
    req: Request<{ id: string }, null, null, null>,
    res: Response,
  ): Promise<void> {
    try {
      const { id } = req.params;
      const game = await GameService.getGame(id);

      res.status(200).json(game);
    } catch (error) {
      throw error;
    }
  }
  async searchGames(
    req: Request<null, null, null, { s: string }>,
    res: Response,
  ): Promise<void> {
    try {
      const { s } = req.query;
      const games = await GameService.searchByField("name", s);
      res.status(200).json(games);
    } catch (error) {
      throw error;
    }
  }
}
export default new GameController();
