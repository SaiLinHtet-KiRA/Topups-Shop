import UserID from "../../interface/types/UserID";
export interface CheckIDServiceInterface {
    mobilelegends(id: UserID): Promise<{
        code: number;
        username: string;
    }>;
}
