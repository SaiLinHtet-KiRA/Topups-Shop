import { GameRepoInterface } from "interface/repo/Game.repo.interface";
import Game, { RawGame } from "interface/types/Game";
export default class GameRepo implements GameRepoInterface {
    create(data: RawGame): Promise<void>;
    get(): Promise<Game[]>;
    getByid(id: string): Promise<Game | null>;
    getByName(name: string): Promise<Game | null>;
    delete(id: string): Promise<void>;
}
