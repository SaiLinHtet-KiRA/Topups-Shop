import { Router } from "express";
import TelegramRoute from "./telegram.route";
import authController from "../../controller/auth.controller";
import requireAuth from "../../middleware/requireAuth";
const router = Router();

router.get("/profile", requireAuth, authController.getUser);
router.use(TelegramRoute);

export default router;
