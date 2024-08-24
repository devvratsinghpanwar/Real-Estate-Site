import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Congig.js";
const router = express.Router();

router.post("/create", jwtCheck, createResidency);
router.get("/allresidencies", getAllResidencies);
router.get("/:id", getResidency);

export { router as residnecyRoute };
