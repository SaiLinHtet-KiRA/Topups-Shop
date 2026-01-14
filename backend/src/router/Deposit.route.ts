import { Router } from "express";
import checkFileExist from "../middleware/checkFileExist.middleware";
import multer from "multer";
import financialController from "../controller/Financial.controller";
import requireAuth from "../middleware/requireAuth";

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});
router.post(
  "",
  requireAuth,
  [upload.single("receipt"), checkFileExist],
  financialController.deposit
);

export default router;
