import { Request, Response } from "express";
import { ModelKey } from "./help";

export default interface RecordControllerType {
  getRecords(
    req: Request<
      { id: string },
      null,
      null,
      { start: number; per: number; sort: string; type: ModelKey }
    >,
    res: Response,
  ): Promise<void>;
}
