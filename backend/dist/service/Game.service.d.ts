import { GameServiceInterface } from "../interface/service/Games.service.interface";
import Game, { RawGame } from "../interface/types/Game";
export default class GameService implements GameServiceInterface {
    createGame(data: RawGame): Promise<void>;
    getGames(): Promise<Game[]>;
    getGameById(id: string): Promise<Game>;
    getGameByName(name: string): Promise<Game | null>;
}
