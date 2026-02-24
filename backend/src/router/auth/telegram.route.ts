import AuthController from "../../controller/auth.controller";
import { Router } from "express";
import CheckTgDataValidation from "../../middleware/CheckTgDataValidation";

const router = Router();

router.post("/telegram", CheckTgDataValidation, AuthController.TelegramLogin);

export default router;
