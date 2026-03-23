import { ModelKey } from "./types/help";
import { ModelType } from "./types/Records.repo.type";
import RecordsServiceType from "./types/Records.service.type";
import {
  RecordsType,
  RecordsDocument,
  DepositsModel,
  TopupsModel,
} from "./Records.model";
import RecordsRepo from "./Records.repo";
import { UpdateQuery } from "mongoose";

class RecordService implements RecordsServiceType {
  #getModel(type: ModelKey): ModelType {
    try {
      if (type == "Deposit") return DepositsModel;
      else if (type == "Topups") return TopupsModel;
      throw Error("Model can get only Deposit or Topups");
    } catch (error) {
      throw error;
    }
  }
  async createRecords(
    data: RecordsType,
    Model: ModelKey,
  ): Promise<RecordsDocument> {
    try {
      return await RecordsRepo.create(data, this.#getModel(Model));
    } catch (error) {
      throw error;
    }
  }
  async getRecords(id: string, Model: ModelKey): Promise<RecordsDocument> {
    try {
      return await RecordsRepo.get(id, this.#getModel(Model));
    } catch (error) {
      throw error;
    }
  }
  async updateRecords(
    id: string,
    data: UpdateQuery<RecordsType>,
    Model: ModelKey,
  ): Promise<RecordsDocument> {
    try {
      return await RecordsRepo.update(id, data, this.#getModel(Model));
    } catch (error) {
      throw error;
    }
  }
  async deleteRecords(id: string, Model: ModelKey): Promise<RecordsDocument> {
    try {
      return await RecordsRepo.delete(id, this.#getModel(Model));
    } catch (error) {
      throw error;
    }
  }
}

export default new RecordService();
