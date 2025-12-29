import AuthController from "../../controller/auth.controller";
import { Router } from "express";

const router = Router();

router.post("/telegram", AuthController.TelegramLogin);

export default router;
