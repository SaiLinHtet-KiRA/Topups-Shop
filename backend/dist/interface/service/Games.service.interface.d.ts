import Game, { RawGame } from "../../interface/types/Game";
export interface GameServiceInterface {
    createGame(data: RawGame): Promise<void>;
    getGames(): Promise<Game[]>;
    getGameById(id: String): Promise<Game>;
    getGameByName(name: String): Promise<Game | null>;
}
