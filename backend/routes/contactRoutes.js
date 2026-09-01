import express from "express";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and message are required.",
            });
        }

        // Future: MongoDB entry or email sending logic here

        return res.status(200).json({
            success: true,
            message: "Message received! We will get back to you soon.",
        });
    } catch (error) {
        next(error);
    }
});

export default router;