import { UpdateQuery } from "mongoose";
import { User, UserDocument } from "../../model/User.model";

export default interface UserRepo {
  create(id: string): Promise<UserDocument>;
  getMany(
    filter: Partial<User>,
    start: number,
    limit: number,
  ): Promise<UserDocument[]>;
  getByFindOne(id: string): Promise<UserDocument>;
  getById(id: string): Promise<UserDocument>;
  updateById(
    id: string,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument>;
  updateByFindOne(
    filter: Partial<User>,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument>;
  deleteById(id: string): Promise<UserDocument>;
}
