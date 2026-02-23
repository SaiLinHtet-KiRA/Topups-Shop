import { NotFoundError } from "../util/error/errors";
import TopupRepoType from "../interface/repo/Topup.repo.type";
import TopupsModel, { Topup, TopupDocument } from "../model/Topup.model";

class TopupRepo implements TopupRepoType {
  async creat(data: Topup): Promise<TopupDocument> {
    try {
      const newTopup = new TopupsModel(data);
      return await newTopup.save();
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<TopupDocument> {
    try {
      const topup = await TopupsModel.findById(id);
      if (!topup) throw new NotFoundError(`Topup id ${id} was not found in DB`);
      return topup;
    } catch (error) {
      throw error;
    }
  }
  async getMany(start: number, limit: number): Promise<TopupDocument[]> {
    try {
      return await TopupsModel.find()
        .skip((start - 1) * limit)
        .limit(limit)
        .sort();
    } catch (error) {
      throw error;
    }
  }
  async updateById(id: string, data: Topup): Promise<TopupDocument> {
    try {
      const topup = await TopupsModel.findByIdAndUpdate(id, data);
      if (!topup) throw new NotFoundError(`Topup id ${id} was not found in DB`);
      return topup;
    } catch (error) {
      throw error;
    }
  }
  async deleteById(id: string): Promise<TopupDocument> {
    try {
      const topup = await TopupsModel.findByIdAndDelete(id);
      if (!topup) throw new NotFoundError(`Topup id ${id} was not found in DB`);
      return topup;
    } catch (error) {
      throw error;
    }
  }
}

export default new TopupRepo();
