import { Router } from "express";
import { getAllDrugs, getDrugsByIds } from "../controllers/drugs.js";

const router = new Router();

router.get("/", getAllDrugs);
router.post("/", getDrugsByIds);

export default router;
