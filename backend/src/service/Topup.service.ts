import TopupServiceType from "../interface/service/Topup.service.type";
import { Topup, TopupDocument } from "../model/Topup.model";

class TopupService implements TopupServiceType {
  async createTopup(data: Topup): Promise<TopupDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getTopup(id: string): Promise<TopupDocument> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async getTopups(page: number, limit: number): Promise<TopupDocument[]> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
  async updateTopup(id: string, data: TopupDocument): Promise<TopupDocument> {
    try {
      throw new Error("Method not implemented.");
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
