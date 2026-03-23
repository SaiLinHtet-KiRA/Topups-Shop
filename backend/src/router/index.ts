import { Router } from "express";
import AuthRouter from "./auth/index";
import DepositRouter from "../Financial/Deposit.route";
import GameRouter from "../Game/Game.route";
import PackageRouter from "../Packages/Package.route";
import TopupRouter from "../Topup/Topup.route";
import requireAuth from "../middleware/requireAuth";
import authController from "../User/auth.controller";
import RecordRouter from "../records/route";

const router = Router();

router.get("/", (req, res) => {
  res.json("all good").status(200);
});
router.use("/auth", AuthRouter);
router.use("/histroy", RecordRouter);
router.get("/leaderboard", authController.getUsers);
router.use(DepositRouter);
router.use("/game", GameRouter);
router.use("/package", PackageRouter);
router.use(TopupRouter);

export default router;
