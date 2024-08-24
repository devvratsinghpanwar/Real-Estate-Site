import express from "express";
import {
  allbookings,
  allfav,
  bookVisit,
  cancelbooking,
  createUser,
  tofavourites,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Congig.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookedVisit/:id", jwtCheck, bookVisit);
router.post("/allbookings", allbookings);
router.post("/removebooking/:id", jwtCheck, cancelbooking);
router.post("/tofavourites/:rid", jwtCheck, tofavourites);
router.post("/allfavourites", jwtCheck, allfav);

export { router as userRoute };
