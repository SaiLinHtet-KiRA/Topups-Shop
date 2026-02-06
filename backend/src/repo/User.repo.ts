import UserModel, { User, UserDocument } from "../model/User.model";
import UserRepoType from "../interface/repo/User.repo.type";
import { NotFoundError } from "../util/error/errors";
import { UpdateQuery } from "mongoose";
import { Deposit, DepositDocument } from "../model/Deposit.model";
import { TopupDocument } from "../model/Topup.model";

class UserRepo implements UserRepoType {
  async create(id: string): Promise<UserDocument> {
    try {
      const User = new UserModel({ id });
      return await User.save();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getById(id: string): Promise<UserDocument> {
    try {
      const User = await UserModel.findById(id);
      if (!User) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return User;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getMany(
    filter: Partial<User>,
    start: number,
    limit: number,
  ): Promise<UserDocument[]> {
    try {
      return await UserModel.find(filter);
    } catch (error) {
      throw error;
    }
  }
  async getByFindOne(id: string): Promise<UserDocument> {
    try {
      const user = await UserModel.findOne({ id });
      if (!user) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getPopulate(
    id: string,
    type: string,
    start: number,
    limit: number,
  ): Promise<DepositDocument[] | TopupDocument[]> {
    try {
      const user = await UserModel.findById(id, {
        receipt: 1,
        topups: 1,
      }).populate({
        path: type,
        options: {
          limit,
          skip: start,
          sort: { createdAt: -1 },
        },
      });
      if (!user) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      if (user.receipt) return user.receipt;
      if (user.topups) return user.topups;
    } catch (error) {
      throw error;
    }
  }
  async updateById(
    id: string,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    try {
      const user = await UserModel.findByIdAndUpdate(id, data);
      if (!user) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async updateByFindOne(
    { id }: Partial<User>,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    try {
      const user = await UserModel.findOneAndUpdate({ id }, data);
      if (!user) throw new NotFoundError(`User is not found in DB!!! ID=${id}`);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<UserDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}

export default new UserRepo();
