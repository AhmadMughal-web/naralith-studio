// One-time script to create the first admin user.
// Run: node seedAdmin.js
// Then delete this file or leave it — it's safe to re-run (it skips if the user already exists).

import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

// ---- EDIT THESE BEFORE RUNNING ----
const ADMIN_NAME = "Muhammad Ahmad";
const ADMIN_EMAIL = "your-email@example.com";
const ADMIN_PASSWORD = "ChangeThisPassword123";
// ------------------------------------

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const exists = await User.findOne({ email: ADMIN_EMAIL });
    if (exists) {
      console.log("A user with this email already exists:", ADMIN_EMAIL);
      process.exit(0);
    }

    const admin = await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: "admin",
    });

    console.log("Admin created successfully:");
    console.log("Email:", admin.email);
    console.log("Password:", ADMIN_PASSWORD, "(change this after first login)");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
};

run();