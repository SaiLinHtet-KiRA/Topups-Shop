import { Router } from "express";
import AuthRouter from "./auth/index";
import DepositRouter from "./Deposit.route";
import GameRouter from "./Game.route";
import PackageRouter from "./Package.route";
import TopupRouter from "./Topup.route";
import requireAuth from "../middleware/requireAuth";

const router = Router();

router.get("/", (req, res) => {
  res.send("all good");
  res.json("all good").status(200);
});
router.use("/auth", AuthRouter);
router.use("/deposit", DepositRouter);
router.use("/game", GameRouter);
router.use("/package", PackageRouter);
router.use("/topup", requireAuth, TopupRouter);

export default router;
