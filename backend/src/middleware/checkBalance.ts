import { NextFunction, Request, Response } from "express";
import UserService from "../User/User.service";
import PackageService from "../Packages/Package.service";
import Topup from "../interface/dto/Topup.dto";

export default async function checkBalance(
  req: Request<null, null, Topup, null>,
  res: Response,
  next: NextFunction,
) {
  try {
    const body = req.body;
    const user = req.user;
    const { balance } = await UserService.getById(user._id);
    const { _id, name, new_price, icon } = await PackageService.getPackage(
      body.package as any,
    );
    if (balance < new_price) throw new Error("Insufficient Balance!!");
    req.body.package = {
      id: _id.toString(),
      name,
      icon,
      price: new_price,
    };

    next();
  } catch (error) {
    throw error;
  }
}
