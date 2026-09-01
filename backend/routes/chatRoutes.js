import express from "express";
import { sendMessage } from "../controllers/chatController.js";

const router = express.Router();

// POST /api/chat — send the full conversation, get the assistant's reply
router.post("/", sendMessage);

export default router;