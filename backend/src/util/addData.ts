import GameService from "../service/Game.service";
import Games from "../data/game";
import Config from "../data/config";
import fs from "fs";
import PackageService from "../service/Package.service";
import PackagesService from "../service/Packages.service";
import mongoose from "mongoose";
import ConfigService from "../service/Config.service";

const addData = async () => {
  try {
    Games.map(async ({ name, data }) => {
      const exist = await GameService.searchByField("name", name);

      if (!exist.length) {
        fs.readFile(
          process.cwd() + "/json/games" + data,
          "utf8",
          async (err, data) => {
            if (err) {
              throw err;
            }
            const { packages, ...game }: any = JSON.parse(data);
            const { _id } = await GameService.createGame(game);

            for (const pkges of packages!) {
              const savedPackages: mongoose.Types.ObjectId[] = [];

              for (const Package of pkges.packages) {
                const savedPackage = await PackageService.createPackage({
                  ...Package,
                  game: _id,
                });

                savedPackages.push(savedPackage._id);
              }
              const savedPackagesSection = await PackagesService.createPackages(
                {
                  name: pkges.name,
                  packages: savedPackages,
                },
              );
              GameService.updateGameInfo(_id.toString(), {
                $push: { packages: savedPackagesSection._id },
              });
            }
          },
        );
      }
    });
    Config.map(async ({ name, value }) => {
      await ConfigService.findOrCreate(name, {
        value,
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default addData;
