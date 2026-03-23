import { Router } from "express";
import TelegramRoute from "./telegram.route";
import authController from "../../User/auth.controller";
import requireAuth from "../../middleware/requireAuth";
const router = Router();

router.get("/info", requireAuth, authController.getAccountInfo);
router.get("/history", requireAuth, authController.getHistory);
router.patch("/info", requireAuth, authController.updateUserInfo);

router.use(TelegramRoute);

export default router;
