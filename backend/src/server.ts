import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import tripRoutes from "./routes/trip.route.js";
import aiRoutes from "./routes/ai.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Incoming Origin:", origin);
      console.log("Allowed Origin:", process.env.FRONTEND_URL);
      if (!origin || origin === process.env.FRONTEND_URL) {
        callback(null, true);
      } else {
        callback(new Error("CORS blocked"));
      }
    },
    credentials: false,
  }),
);

app.use(express.json());

connectDB();

app.get("/", (_, res) => {
  res.send("Travel Planner API");
});

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
