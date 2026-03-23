import UserModel, { User, UserDocument } from "./User.model";
import type UserServiceType from "./types/User.service.type";
import UserRepo from "./User.repo";
import { UpdateQuery } from "mongoose";
import { DepositDocument } from "../Financial/Deposit.model";

class UserService implements UserServiceType {
  async findOrCreateUser(id: string): Promise<UserDocument> {
    try {
      const user = await UserRepo.getByFindOne(id);
      return user;
    } catch (error) {
      return await UserRepo.create(id);
    }
  }
  async getUsers(start: number, limit: number): Promise<UserDocument[]> {
    try {
      return await UserRepo.getMany({}, "totalBalance", 0, 10);
    } catch (error) {
      throw error;
    }
  }
  async getHistory(
    id: string,
    type: string,
    start: number,
    limit: number,
  ): Promise<DepositDocument[]> {
    try {
      throw new Error("");
      // return await UserRepo.getPopulate(id, type, start, limit);
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
      return await UserRepo.getMany({ role: "admin" }, "totalBalance", 0, 10);
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
