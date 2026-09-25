import express from "express";
import {
  login,
  getMe,
  createMember,
  getMembers,
  deleteMember,
} from "../controllers/authController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", protect, getMe);

router.post("/members", protect, adminOnly, createMember);
router.get("/members", protect, adminOnly, getMembers);
router.delete("/members/:id", protect, adminOnly, deleteMember);

export default router;