import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", authMiddleware, roleMiddleware(["admin"]), getAllUsers);
router.delete("/user/:id", authMiddleware, roleMiddleware(["admin"]), deleteUser);

export default router;
