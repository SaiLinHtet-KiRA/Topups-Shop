import { Router } from "express";
import AuthRouter from "./auth/index";
const router = Router();

router.get("/", (req, res) => {
  res.send("all good");
  res.json("all good").status(200);
});
router.use("/auth", AuthRouter);
export default router;
