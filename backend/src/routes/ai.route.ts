import express from "express";

import { protect } from "../middleware/auth.js";

import { generateTrip, regenerateDay } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/generate-trip/:tripId", protect, generateTrip);

router.post("/regenerate-day", protect, regenerateDay);

export default router;
