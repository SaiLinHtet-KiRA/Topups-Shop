"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
const repo_1 = require("../repo");
const errors_1 = require("../util/error/errors");
class TopueService {
    async createTopup(data) {
        try {
            const { packages, ...otherData } = data;
            let RawTopup = { ...otherData, packages: [], total: 0 };
            for (const pg of packages) {
                const [PackageType, SelectedPackage] = pg
                    .split(" | ")
                    .map((index) => Number(index));
                const { packages } = await service_1.game.getGameById(data.game);
                const { packages: minpg } = packages[PackageType];
                RawTopup.packages.push({
                    package_name: minpg[SelectedPackage].name,
                    package_images: minpg[SelectedPackage].image,
                    price: minpg[SelectedPackage].new_price,
                });
                RawTopup.total += minpg[SelectedPackage].new_price;
            }
            console.log(RawTopup);
            RawTopup.packages.map((pg) => {
                console.log("pgs", pg);
            });
            const Topup = await repo_1.topupRepo.create(RawTopup);
            service_1.user.addTopup(otherData.customer, Topup._id.toString());
            return Topup;
        }
        catch (error) {
            throw error;
        }
    }
    async getTopups(user_id) {
        try {
            const Topup = await repo_1.topupRepo.get(user_id);
            if (!Topup)
                throw new errors_1.NotFoundError("Topups is not found or User is not authenticated");
            return Topup;
        }
        catch (error) {
            throw error;
        }
    }
    async getTopup(id) {
        try {
            const Topup = await repo_1.topupRepo.getByid(id);
            if (!Topup)
                throw new errors_1.NotFoundError("Topups is not found or User is not authenticated");
            return Topup;
        }
        catch (error) {
            throw error;
        }
    }
    deleteTopup(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = TopueService;
//# sourceMappingURL=Topup.service.js.map