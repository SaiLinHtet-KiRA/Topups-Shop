import { UserDocument } from "@/model/User.model";
import UserRepoType from "@/interface/repo/User.repo.type";
declare class UserRepo implements UserRepoType {
    createUser(id: string): Promise<UserDocument>;
    getUserByID(id: string): Promise<UserDocument>;
    getUsers(start: number, limit: number): Promise<UserDocument[]>;
    getUserByFindOne(id: string): Promise<UserDocument>;
    updateUserById(id: string, data: UserDocument): Promise<UserDocument>;
    deleteUserById(id: string): Promise<UserDocument>;
}
declare const _default: UserRepo;
export default _default;
