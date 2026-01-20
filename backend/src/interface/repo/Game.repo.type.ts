import { GameDocument } from "../../model/Game.model";
import { HydratedDocument, UpdateQueryKnownOnly } from "mongoose";

export default interface GameRepoType {
  create(info: GameDocument): Promise<HydratedDocument<GameDocument>>;
  findByRegex(
    field: keyof GameDocument,
    pattern: string,
  ): Promise<GameDocument[]>;
  getById(id: string): Promise<GameDocument>;
  updateById(
    id: string,
    update: UpdateQueryKnownOnly<GameDocument>,
  ): Promise<GameDocument>;
  deleteById(id: string): Promise<GameDocument>;
}
