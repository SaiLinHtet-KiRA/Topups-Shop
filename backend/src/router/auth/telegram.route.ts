import AuthController from "../../User/auth.controller";
import { Router } from "express";
import CheckTgDataValidation from "../../middleware/CheckTgDataValidation";

const router = Router();

router.post("/telegram", AuthController.TelegramLogin);

export default router;
