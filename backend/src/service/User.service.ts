import { UserDocument } from "../model/User.model";
import type UserServiceType from "../interface/service/User.service.type";
import UserRepo from "../repo/User.repo";

class UserService implements UserServiceType {
  async findOrCreateUser(id: string): Promise<UserDocument> {
    try {
      const user = await UserRepo.getUserByFindOne(id);
      return user;
    } catch (error) {
      return await UserRepo.create(id);
    }
  }
  getUsers(start: number, limit: number): Promise<UserDocument[]> {
    throw new Error("Method not implemented asds.");
  }
  async getById(id: string): Promise<UserDocument> {
    try {
      const user = await UserRepo.getUserByID(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  updatUserById(id: string, data: UserDocument): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
}
export default new UserService();
