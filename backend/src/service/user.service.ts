import { UserDocument } from "model/User.model";
import UserServiceType from "../interface/service/user.service.type";
import UserRepo from "../repo/user.repo";

class UserService implements UserServiceType {
  async findOrCreateUser(
    id: string,
    data: UserDocument
  ): Promise<UserDocument> {
    try {
      const user = await UserRepo.getUserById(id);
      if (!user) throw Error("user dose not existed in DB");
      return user;
    } catch (error) {
      return await UserRepo.createUser(data);
    }
  }
  getUsers(start: number, limit: number): Promise<UserDocument[]> {
    throw new Error("Method not implemented.");
  }
  getUserById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  updateUserById(id: string, data: UserDocument): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  deleteUserById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
}
export default new UserService();
