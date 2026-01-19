// import { game } from "../service";
// import Games from "../data/game";
// import fs from "fs";

// export const AddGames = async () => {
//   try {
//     Games.map(async ({ name, data }) => {
//       const exist = await game.getGameByName(name);

//       if (!exist) {
//         fs.readFile(
//           process.cwd() + "/json/games" + data,
//           "utf8",
//           (err, data) => {
//             if (err) throw err;
//             game.createGame(JSON.parse(data));
//           }
//         );
//       }
//     });
//   } catch (error) {
//     process.exit(1);
//   }
// };
