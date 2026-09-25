import express from "express";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  addMilestone,
  updateMilestone,
  deleteMilestone,
  addPayment,
  updatePayment,
  deletePayment,
  getDashboardStats,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect); // sab routes login required

router.get("/stats/summary", getDashboardStats);

router.route("/").get(getProjects).post(createProject);
router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);

router.post("/:id/milestones", addMilestone);
router.put("/:id/milestones/:milestoneId", updateMilestone);
router.delete("/:id/milestones/:milestoneId", deleteMilestone);

router.post("/:id/payments", addPayment);
router.put("/:id/payments/:paymentId", updatePayment);
router.delete("/:id/payments/:paymentId", deletePayment);

export default router;