import FinancialServiceType from "../interface/repo/Financial.repo.type";
import DepositModel, { DepositDocument } from "../model/Deposit.model";

class FinancialRepo implements FinancialServiceType {
  async create(): Promise<DepositDocument> {
    try {
      const deposit = new DepositModel();
      return await deposit.save();
    } catch (error) {
      throw error;
    }
  }
  updateById(id: string, data: DepositDocument): Promise<DepositDocument> {
    try {
      throw new Error("Method not implemented.");
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
}

export default new FinancialRepo();
