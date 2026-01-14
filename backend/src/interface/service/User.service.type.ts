import { UserDocument } from "../../model/User.model";

export default interface UserService {
  findOrCreateUser(id: string): Promise<UserDocument>;
  getUsers(start: number, limit: number): Promise<UserDocument[]>;
  getById(id: string): Promise<UserDocument>;
  updatUserById(id: string, data: UserDocument): Promise<UserDocument>;
  deleteById(id: string): Promise<UserDocument>;
}
