import { Router } from "express";
import GameController from "../controller/Game.controller";

const router = Router();

router.get("", GameController.getGames);
router.get("/search", GameController.searchGames);

export default router;
