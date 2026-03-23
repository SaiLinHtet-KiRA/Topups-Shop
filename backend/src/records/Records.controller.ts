import { Request, Response } from "express";
import RecordControllerType from "./types/Records.controller.type";
import RecordsService from "./Records.service";
import { ModelKey } from "./types/help";

class RecordController implements RecordControllerType {
  async getRecords(
    req: Request<
      { id: string },
      null,
      null,
      { start: number; per: number; sort: string; type: ModelKey }
    >,
    res: Response,
  ): Promise<void> {
    try {
      const { recharges, topups } = req.user;
      const { type } = req.query;
      const id = type == "Deposit" ? recharges : topups;
      const records = await RecordsService.getRecords(id, type);
      res.status(200).json(records);
    } catch (error) {
      throw error;
    }
  }
}

export default new RecordController();
