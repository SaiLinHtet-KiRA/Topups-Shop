import { UserDocument } from "../model/User.model";
declare class UserService {
    findOrCreateUser(id: string): Promise<UserDocument>;
    getUsers(start: number, limit: number): Promise<UserDocument[]>;
    getUserById(id: string): Promise<UserDocument>;
    updateUserById(id: string, data: UserDocument): Promise<UserDocument>;
    deleteUserById(id: string): Promise<UserDocument>;
}
declare const _default: UserService;
export default _default;
