import Receipt from "../interface/other/Receipt";
import FinancialRepoType from "../interface/repo/Financial.repo.type";
import DepositModel, { Deposit, DepositDocument } from "../model/Deposit.model";
import { NotFoundError } from "../util/error/errors";

class FinancialRepo implements FinancialRepoType {
  async create(receipt: Deposit): Promise<DepositDocument> {
    try {
      const deposit = new DepositModel({ ...receipt });
      return await deposit.save();
    } catch (error) {
      throw error;
    }
  }
  async updateById(
    id: string,
    data: DepositDocument,
  ): Promise<DepositDocument> {
    try {
      const updated = await DepositModel.findByIdAndUpdate(id, data, {
        new: true,
      }).lean();
      if (!updated) {
        throw new NotFoundError(`Order-${id} wasn't found in data base`);
      }
      return updated;
    } catch (error) {
      throw error;
    }
  }
  async getMany(start: number, limit: number): Promise<DepositDocument[]> {
    try {
      return await DepositModel.find()
        .skip((start - 1) * limit)
        .limit(limit);
    } catch (error) {
      throw error;
    }
  }
  deleteById(id: string): Promise<DepositDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<DepositDocument> {
    try {
      const deposit = await DepositModel.findById(id);

      if (!deposit)
        throw new NotFoundError(`Order-${id} wasn't found in data base`);

      return deposit;
    } catch (error) {
      throw error;
    }
  }
}

export default new FinancialRepo();
