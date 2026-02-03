import UserModel, { User, UserDocument } from "../model/User.model";
import type UserServiceType from "../interface/service/User.service.type";
import UserRepo from "../repo/User.repo";
import { UpdateQuery } from "mongoose";

class UserService implements UserServiceType {
  async findOrCreateUser(id: string): Promise<UserDocument> {
    try {
      const user = await UserRepo.getByFindOne(id);
      return user;
    } catch (error) {
      return await UserRepo.create(id);
    }
  }
  getUsers(start: number, limit: number): Promise<UserDocument[]> {
    try {
      throw new Error("Method not implemented asds.");
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<UserDocument> {
    try {
      const user = await UserRepo.getById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async updateUserById(
    id: string,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    try {
      return UserRepo.updateById(id, data);
    } catch (error) {
      throw error;
    }
  }
  deleteById(id: string): Promise<UserDocument> {
    throw new Error("Method not implemented.");
  }
  async findAdmins(): Promise<UserDocument[]> {
    try {
      return await UserRepo.getMany({ role: "admin" }, 1, 10);
    } catch (error) {
      throw error;
    }
  }
  async updateByFindOne(
    filter: Partial<User>,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    try {
      return await UserRepo.updateByFindOne({ id: filter.id }, data);
    } catch (error) {
      throw error;
    }
  }
}
export default new UserService();
