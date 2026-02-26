import TopupServiceType from "../interface/service/Topup.service.type";
import { TopupDocument } from "../model/Topup.model";
import TopupDto from "../interface/dto/Topup.dto";
import TopupRepo from "../repo/Topup.repo";
import TelegramBot from "../util/TelegramBot";
import UserService from "./User.service";
import GameService from "./Game.service";
import mongoose from "mongoose";

class TopupService implements TopupServiceType {
  async createTopup(userId: string, data: TopupDto): Promise<TopupDocument> {
    try {
      const { name } = await GameService.getGame(data.game);
      const topup = await TopupRepo.creat({
        game: data.game as any,
        package: data.package.id as any,
        price: data.package.price,
        userID: new mongoose.Types.ObjectId(userId),
        ...(data.checkId && {
          Id: {
            userID: data.checkId.userID,
            zoneID: data.checkId.zoneID,
            server: data.checkId.server,
          },
        }),
        ...(data.login && {
          login: {
            username: data.login.username,
            password: data.login.password,
            backupCode: data.login.backupCode,
          },
        }),
      });
      await UserService.updateUserById(userId, {
        $inc: { balance: -data.package.price, numTopups: 1 },
        $push: { topups: topup._id },
      });

      const Admins = await UserService.findAdmins();
      Admins.map(({ id }) =>
        TelegramBot.sendMessage(
          Number(id),
          `New order Arrived!!\nGame: ${name}\nPackage: ${data.package.name}\nPrice: ${data.package.price} ${topup.currency}${data.checkId.userID ? "\nUser ID: " + data.checkId.userID : ""} ${data.checkId.zoneID ? "\nZone ID or Server ID: " + data.checkId.zoneID : ""} ${data.checkId.server ? "\nServer:" + data.checkId.server : ""}${data.login.username ? "\nUsername:" + data.login.username : ""}${data.login.password ? "\nPassword:" + data.login.password : ""}${data.login.backupCode ? "\nBackup Code:" + data.login.backupCode : ""}`,
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "✅",
                    callback_data: JSON.stringify({
                      id: topup._id.toString(),
                      t: "topup",
                      status: "success",
                    }),
                  },
                  {
                    text: "❌",
                    callback_data: JSON.stringify({
                      id: topup._id.toString(),
                      t: "topup",
                      status: "fail",
                    }),
                  },
                ],
              ],
            },
          },
        ),
      );

      return topup;
    } catch (error) {
      throw error;
    }
  }
  async getTopup(id: string): Promise<TopupDocument> {
    try {
      return TopupRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
  async getTopups(page: number, limit: number): Promise<TopupDocument[]> {
    try {
      return await TopupRepo.getMany(page, limit);
    } catch (error) {
      throw error;
    }
  }
  async updateTopup(id: string, data: TopupDocument): Promise<TopupDocument> {
    try {
      return await TopupRepo.updateById(id, data);
    } catch (error) {
      throw error;
    }
  }
  async deleteTopup(id: string): Promise<TopupDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}

export default new TopupService();
