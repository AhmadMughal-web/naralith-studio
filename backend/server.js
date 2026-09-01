import "dotenv/config";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start the server immediately — don't block chatbot/other routes on Mongo.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB in the background. If it's not configured yet, log a
// warning instead of crashing — routes that don't need it (like /api/chat)
// keep working fine.
connectDB().catch((err) => {
    console.warn("MongoDB not connected — contact form storage won't work until this is fixed.");
    console.warn(err.message);
});