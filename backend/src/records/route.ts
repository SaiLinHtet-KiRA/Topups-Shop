import { Router } from "express";
import requireAuth from "../middleware/requireAuth";
import RecordsController from "./Records.controller";

const router = Router();

router.get("/", requireAuth, RecordsController.getRecords);

export default router;
