import { UpdateQuery } from "mongoose";
import {
  RecordsDocument,
  RecordsType,
  DepositsModel,
  TopupsModel,
} from "../Records.model";

export type ModelType = typeof DepositsModel | typeof TopupsModel;

export default interface RecordsRepoType {
  create(
    data: Partial<RecordsType>,
    Model: ModelType,
  ): Promise<RecordsDocument>;
  get(id: string, Model: ModelType): Promise<RecordsDocument>;
  update(
    id: string,
    query: UpdateQuery<RecordsType>,
    Model: ModelType,
  ): Promise<RecordsDocument>;
  delete(id: string, Model: ModelType): Promise<RecordsDocument>;
}
