import { Router } from "express";
import PackageController from "../controller/Package.controller";

const router = Router();

router.get("", PackageController.getPackages);
router.get("/search", PackageController.searchPackages);

export default router;
