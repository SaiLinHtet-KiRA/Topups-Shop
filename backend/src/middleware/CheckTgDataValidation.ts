import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { BOT_TOKEN } from "../config/config";
import { ValidationError } from "../util/error/errors";
import TgInitData from "../interface/other/TginitData";

export default function CheckTgDataValidation(
  req: Request<null, null, { initData: string; user: TgInitData }, null>,
  res: Response,
  next: NextFunction,
) {
  try {
    const body = req.body;
    const urlParams = new URLSearchParams(body.initData);
    const hash = urlParams.get("hash");
    urlParams.delete("hash");

    const dataCheckString = [...urlParams.entries()]
      .sort()
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    const secret = crypto
      .createHmac("sha256", "WebAppData")
      .update(BOT_TOKEN)
      .digest();

    const calculatedHash = crypto
      .createHmac("sha256", secret)
      .update(dataCheckString)
      .digest("hex");

    if (calculatedHash != hash) {
      new ValidationError("Invalid Telegram data!!");
    }
    const data = Object.fromEntries(new URLSearchParams(body.initData));

    req.body.user = {
      ...data,
      user: JSON.parse(data.user),
    } as unknown as TgInitData;
    next();
  } catch (error) {
    throw error;
  }
}
