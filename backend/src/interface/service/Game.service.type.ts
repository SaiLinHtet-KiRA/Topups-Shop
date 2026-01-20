import { HydratedDocument, UpdateQueryKnownOnly } from "mongoose";
import { GameDocument } from "../../model/Game.model";

export default interface GameServiceType {
  createGame(info: GameDocument): Promise<HydratedDocument<GameDocument>>;
  searchByField(
    field: keyof GameDocument,
    pattern: string,
  ): Promise<GameDocument[]>;
  getGame(id: string): Promise<GameDocument>;
  updateGame(
    id: string,
    data: UpdateQueryKnownOnly<GameDocument>,
  ): Promise<GameDocument>;
}
