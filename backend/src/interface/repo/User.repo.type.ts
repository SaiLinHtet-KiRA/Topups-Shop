import { UserDocument } from "model/User.model";

export default interface UserRepo {
  createUser(data: UserDocument): Promise<UserDocument>;
  getUsers(start: number, limit: number): Promise<UserDocument[]>;
  getUserById(id: string): Promise<UserDocument>;
  updateUserById(id: string, data: UserDocument): Promise<UserDocument>;
  deleteUserById(id: string): Promise<UserDocument>;
}
