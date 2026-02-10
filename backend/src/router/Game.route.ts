import { Router } from "express";
import GameController from "../controller/Game.controller";

const router = Router();

router.get("", GameController.getGames);
router.get("/search", GameController.searchGames);
router.get("/:id", GameController.getGame);
router.patch("/:id", GameController.updateGame);

export default router;
