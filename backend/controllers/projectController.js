import Project from "../models/Project.js";

// helper: admin can touch anything, member only their own created project
const canModify = (project, user) =>
    user.role === "admin" || project.createdBy.toString() === user._id.toString();

// @desc   Create project
// @route  POST /api/admin/projects
export const createProject = async (req, res, next) => {
    try {
        const project = await Project.create({
            ...req.body,
            createdBy: req.user._id,
        });
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Get all projects (everyone sees everything)
// @route  GET /api/admin/projects
export const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find()
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        next(error);
    }
};

// @desc   Get single project
// @route  GET /api/admin/projects/:id
export const getProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id).populate(
            "createdBy",
            "name email"
        );
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Update project
// @route  PUT /api/admin/projects/:id
export const updateProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to edit this project" });
        }

        Object.assign(project, req.body);
        await project.save();
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Delete project
// @route  DELETE /api/admin/projects/:id
export const deleteProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to delete this project" });
        }

        await project.deleteOne();
        res.json({ message: "Project deleted" });
    } catch (error) {
        next(error);
    }
};

// ---------- MILESTONES ----------

// @desc   Add milestone
// @route  POST /api/admin/projects/:id/milestones
export const addMilestone = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        project.milestones.push(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Update milestone
// @route  PUT /api/admin/projects/:id/milestones/:milestoneId
export const updateMilestone = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to edit this project" });
        }

        const milestone = project.milestones.id(req.params.milestoneId);
        if (!milestone) return res.status(404).json({ message: "Milestone not found" });

        Object.assign(milestone, req.body);
        if (req.body.status === "Completed" && !milestone.completedAt) {
            milestone.completedAt = new Date();
        }

        await project.save();
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Delete milestone
// @route  DELETE /api/admin/projects/:id/milestones/:milestoneId
export const deleteMilestone = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to edit this project" });
        }

        project.milestones.id(req.params.milestoneId)?.deleteOne();
        await project.save();
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// ---------- PAYMENTS ----------

// @desc   Add payment
// @route  POST /api/admin/projects/:id/payments
export const addPayment = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        project.payments.push(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Update payment
// @route  PUT /api/admin/projects/:id/payments/:paymentId
export const updatePayment = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to edit this project" });
        }

        const payment = project.payments.id(req.params.paymentId);
        if (!payment) return res.status(404).json({ message: "Payment not found" });

        Object.assign(payment, req.body);
        await project.save();
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Delete payment
// @route  DELETE /api/admin/projects/:id/payments/:paymentId
export const deletePayment = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (!canModify(project, req.user)) {
            return res.status(403).json({ message: "Not allowed to edit this project" });
        }

        project.payments.id(req.params.paymentId)?.deleteOne();
        await project.save();
        res.json(project);
    } catch (error) {
        next(error);
    }
};

// @desc   Dashboard summary stats
// @route  GET /api/admin/projects/stats/summary
export const getDashboardStats = async (req, res, next) => {
    try {
        const projects = await Project.find();

        const totalProjects = projects.length;
        const pendingProjects = projects.filter((p) => p.status === "Pending").length;
        const inProgress = projects.filter((p) => p.status === "In Progress").length;
        const completed = projects.filter((p) => p.status === "Completed").length;

        const upcomingDeadlines = projects
            .filter((p) => p.deadline && p.status !== "Completed" && p.status !== "Cancelled")
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .slice(0, 5)
            .map((p) => ({
                _id: p._id,
                clientName: p.clientName,
                deadline: p.deadline,
                status: p.status,
            }));

        let totalReceived = 0;
        let totalPending = 0;
        projects.forEach((p) => {
            p.payments.forEach((pay) => {
                if (pay.status === "Received") totalReceived += pay.amount;
                else totalPending += pay.amount;
            });
        });

        res.json({
            totalProjects,
            pendingProjects,
            inProgress,
            completed,
            upcomingDeadlines,
            totalReceived,
            totalPending,
        });
    } catch (error) {
        next(error);
    }
};