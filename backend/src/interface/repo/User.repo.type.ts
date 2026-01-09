import { UserDocument } from "@/model/User.model";

export default interface UserRepo {
  createUser(id: string): Promise<UserDocument>;
  getUsers(start: number, limit: number): Promise<UserDocument[]>;
  getUserByFindOne(id: string): Promise<UserDocument>;
  getUserByID(id: string): Promise<UserDocument>;
  updateUserById(id: string, data: UserDocument): Promise<UserDocument>;
  deleteUserById(id: string): Promise<UserDocument>;
}
