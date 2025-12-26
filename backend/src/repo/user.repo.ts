import UserModel, { UserDocument } from "../model/User.model";
import UserRepoType from "../interface/repo/User.repo.type";

class UserRepo implements UserRepoType {
  async createUser(data: UserDocument): Promise<UserDocument> {
    try {
      const User = new UserModel();
      return await User.save();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getUsers(start: number, limit: number): Promise<UserDocument[]> {
    throw new Error("Method not implemented.");
  }
  async getUserById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  async updateUserById(id: string, data: UserDocument): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  async deleteUserById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
}

export default new UserRepo();
