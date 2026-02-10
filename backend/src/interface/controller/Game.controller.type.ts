import { Request, Response } from "express";
import { GameDocument } from "../../model/Game.model";

export default interface GameControllerType {
  getGames(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void>;
  getGame(
    req: Request<{ id: string }, null, null, null>,
    res: Response,
  ): Promise<void>;
  updateGame(
    req: Request<{ id: string }, null, GameDocument, null>,
    res: Response,
  ): Promise<void>;
  searchGames(
    req: Request<null, null, null, { s: string }>,
    res: Response,
  ): Promise<void>;
}
