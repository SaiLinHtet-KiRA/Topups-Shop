import { Router } from "express";
import TelegramRoute from "./telegram.route";
const router = Router();

router.use(TelegramRoute);

export default router;
