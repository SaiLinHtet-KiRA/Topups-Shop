import TopupServiceType from "../interface/service/Topup.service.type";
import { TopupDocument, Topup } from "../model/Topup.model";
import TopupDto from "../interface/dto/Topup.dto";
import TopupRepo from "../repo/Topup.repo";
import TelegramBot from "../util/TelegramBot";
import UserService from "./User.service";
import GameService from "./Game.service";

class TopupService implements TopupServiceType {
  async createTopup(userId: string, data: TopupDto): Promise<TopupDocument> {
    try {
      const { name } = await GameService.getGame(data.game);
      const topup = await TopupRepo.creat({
        game: data.game as any,
        package: data.package.id as any,
        price: data.package.price,
        Id: { userID: data.userId, zoneID: data.zoneId },
      });
      await UserService.updateUserById(userId, {
        $inc: { balance: -data.package.price, numTopups: 1 },
        $push: { topups: topup._id },
      });
      const Admins = await UserService.findAdmins();
      Admins.map(({ id }) =>
        TelegramBot.sendMessage(
          Number(id),
          `New order Arrived!!\nGame: ${name}\nPackage: ${data.package.name}\nPrice: ${data.package.price} ${topup.currency}\nUser Id: ${data.userId}\nZone Id: ${data.zoneId}`,
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
