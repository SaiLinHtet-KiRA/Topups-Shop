import { Router } from "express";
import TelegramRoute from "./telegram.route";
import authController from "../../controller/auth.controller";
import requireAuth from "../../middleware/requireAuth";
const router = Router();

router.get("/info", requireAuth, authController.getAccountInfo);
router.get("/history", requireAuth, authController.getHistory);

router.use(TelegramRoute);

export default router;
