import { UpdateQuery } from "mongoose";
import { User, UserDocument } from "../../model/User.model";
import { DepositDocument } from "../../model/Deposit.model";

export default interface UserService {
  findOrCreateUser(id: string): Promise<UserDocument>;
  getUsers(start: number, limit: number): Promise<UserDocument[]>;
  getHistory(
    id: string,
    type: string,
    start: number,
    limit: number,
  ): Promise<DepositDocument[]>;
  findAdmins(): Promise<UserDocument[]>;
  getById(id: string): Promise<UserDocument>;
  updateUserById(
    id: string,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument>;
  updateByFindOne(
    filter: Partial<User>,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument>;
  deleteById(id: string): Promise<UserDocument>;
}
