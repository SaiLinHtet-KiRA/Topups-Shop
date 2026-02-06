import { Router } from "express";
import requireAuth from "../middleware/requireAuth";
import checkBalance from "../middleware/checkBalance";
import TopupController from "../controller/Topup.controller";

const router = Router();

router.get("/topup", requireAuth, TopupController.getTopups);
router.get("/topups", requireAuth, TopupController.getTopups);
router.post("/topup", requireAuth, checkBalance, TopupController.createTopup);

export default router;
