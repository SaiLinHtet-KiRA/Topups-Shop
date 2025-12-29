"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("../service");
const router = (0, express_1.Router)();
router.get("/game", async (req, res) => {
    try {
        const games = await service_1.game.getGames();
        res.status(200).json(games);
    }
    catch (error) {
        throw error;
    }
});
router.get("/game/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const existGame = await service_1.game.getGameById(id);
        res.status(200).json(existGame);
    }
    catch (error) {
        throw error;
    }
});
exports.default = router;
//# sourceMappingURL=game.route.js.map