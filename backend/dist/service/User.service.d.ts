import { UserDocument } from "model/User.model";
import UserServiceType from "../interface/service/User.service.type";
declare class UserService implements UserServiceType {
    findOrCreateUser(id: string): Promise<UserDocument>;
    getUsers(start: number, limit: number): Promise<UserDocument[]>;
    getUserById(id: string): Promise<UserDocument>;
    updateUserById(id: string, data: UserDocument): Promise<UserDocument>;
    deleteUserById(id: string): Promise<UserDocument>;
}
declare const _default: UserService;
export default _default;
