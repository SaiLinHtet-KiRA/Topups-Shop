import { Router } from "express";
import PackageController from "../controller/Package.controller";
import requireAuth from "../middleware/requireAuth";
import checkBalance from "../middleware/checkBalance";
import TopupController from "../controller/Topup.controller";

const router = Router();

router.get("", PackageController.getPackages);
router.post("", requireAuth, checkBalance, TopupController.createTopup);
router.get("/search", PackageController.searchPackages);

export default router;
