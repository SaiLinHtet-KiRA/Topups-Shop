import Game, { RawGame } from "../../interface/types/Game";
export interface GameRepoInterface {
    create(data: RawGame): Promise<void>;
    get(): Promise<Game[]>;
    getByid(id: string): Promise<Game | null>;
    getByName(id: string): Promise<Game | null>;
    delete(id: string): Promise<void>;
}
