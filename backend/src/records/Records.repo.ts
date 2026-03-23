import { UpdateQuery } from "mongoose";
import {
  RecordsType,
  RecordsDocument,
  DepositsModel,
  TopupsModel,
} from "./Records.model";
import RecordsRepoType, { ModelType } from "./types/Records.repo.type";
import { NotFoundError } from "../util/error/errors";

class RecordsRepo implements RecordsRepoType {
  async create(
    data: Partial<RecordsType>,
    Model: ModelType,
  ): Promise<RecordsDocument> {
    try {
      const newRecord = new Model(data);
      return await newRecord;
    } catch (error) {
      throw error;
    }
  }
  async get(id: string, Model: ModelType): Promise<RecordsDocument> {
    try {
      const record = await Model.findById(id).populate(["records"]);
      if (!record)
        throw new NotFoundError(`${id} was not found in ${Model.name}`);
      return record;
    } catch (error) {
      throw error;
    }
  }
  async update(
    id: string,
    query: UpdateQuery<RecordsType>,
    Model: ModelType,
  ): Promise<RecordsDocument> {
    try {
      const record = await Model.findByIdAndUpdate(id, query);
      if (!record)
        throw new NotFoundError(`${id} was not found in ${Model.name}`);
      return record;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string, Model: ModelType): Promise<RecordsDocument> {
    try {
      const record = await Model.findByIdAndDelete(id);
      if (!record)
        throw new NotFoundError(`${id} was not found in ${Model.name}`);
      return record;
    } catch (error) {
      throw error;
    }
  }
}

export default new RecordsRepo();
