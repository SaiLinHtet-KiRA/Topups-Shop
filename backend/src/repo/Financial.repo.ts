import UserModel, { UserDocument } from "@/model/User.model";
import UserRepoType from "@/interface/repo/User.repo.type";
import { NotFoundError } from "@/util/error/errors";

class UserRepo implements UserRepoType {
  async createUser(id: string): Promise<UserDocument> {
    try {
      const User = new UserModel({ id });
      return await User.save();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getUserByID(id: string): Promise<UserDocument> {
    try {
      const User = await UserModel.findById(id);
      if (!User) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return User;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getUsers(start: number, limit: number): Promise<UserDocument[]> {
    throw new Error("Method not implemented.");
  }
  async getUserByFindOne(id: string): Promise<UserDocument> {
    try {
      const user = await UserModel.findOne({ id });
      if (!user) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async updateUserById(id: string, data: UserDocument): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  async deleteUserById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
}

export default new UserRepo();
