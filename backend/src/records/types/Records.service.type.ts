import { UpdateQuery } from "mongoose";
import {
  RecordsDocument,
  RecordsType,
  DepositsModel,
  TopupsModel,
} from "../Records.model";
import { ModelKey } from "./help";

export default interface RecordsServiceType {
  createRecords(data: RecordsType, Model: ModelKey): Promise<RecordsDocument>;
  getRecords(id: string, Model: ModelKey): Promise<RecordsDocument>;
  updateRecords(
    id: string,
    data: UpdateQuery<RecordsType>,
    Model: ModelKey,
  ): Promise<RecordsDocument>;
  deleteRecords(id: string, Model: ModelKey): Promise<RecordsDocument>;
}
