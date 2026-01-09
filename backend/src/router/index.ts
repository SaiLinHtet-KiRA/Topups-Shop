import { Router } from "express";
import AuthRouter from "./auth/index";
import DepositRouter from "./Deposit.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("all good");
  res.json("all good").status(200);
});
router.use("/auth", AuthRouter);
router.use("/deposit", DepositRouter);

export default router;
