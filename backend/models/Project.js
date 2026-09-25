import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    dueDate: { type: Date },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

const paymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      enum: ["Advance", "Milestone", "Final"],
      required: true,
    },
    date: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Received"],
      default: "Pending",
    },
    note: { type: String, trim: true },
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, trim: true },
    clientEmail: { type: String, trim: true, lowercase: true },
    clientPhone: { type: String, trim: true },

    serviceType: {
      type: String,
      enum: [
        "AI Chatbot",
        "Web Development",
        "SEO/Digital Growth",
        "UI/UX Design",
        "Graphic Design",
      ],
      required: true,
    },
    tier: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Review",
        "Completed",
        "On Hold",
        "Cancelled",
      ],
      default: "Pending",
    },

    totalAmount: { type: Number, default: 0, min: 0 },
    startDate: { type: Date, default: Date.now },
    deadline: { type: Date },

    milestones: [milestoneSchema],
    payments: [paymentSchema],

    notes: { type: String, trim: true },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;