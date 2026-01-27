import { Request, Response } from "express";

export default interface PackageControllerType {
  getPackages(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void>;
  searchPackages(
    req: Request<null, null, null, { s: string }>,
    res: Response,
  ): Promise<void>;
}
