import express from "express";
import { authenticateUser, authorizeRole } from "../middlewares/authMiddleware.js";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", authenticateUser, authorizeRole(["admin"]), getAllUsers);
router.delete("/user/:id", authenticateUser, authorizeRole(["admin"]), deleteUser);

export default router;
