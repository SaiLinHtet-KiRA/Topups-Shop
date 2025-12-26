import { getUser } from "../../controller/auth/telegram.controller";
import { Router } from "express";

const router = Router();

router.post("/telegram", getUser);

export default router;
