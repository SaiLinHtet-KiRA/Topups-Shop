import { Request, Response } from "express";
import { DepositDocument } from "../../model/Deposit.model";

export default interface FinancialControllerType {
  deposit(
    req: Request<any, any, Omit<DepositDocument, "receipt" | "userID">>,
    res: Response
  ): Promise<void>;
}
