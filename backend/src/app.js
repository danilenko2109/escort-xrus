const express = require("express");
const cors = require("cors");
require("./database/db");

const profileRoutes = require("../routes/profileRoutes");
const adminRoutes = require("../routes/adminRoutes");
const contactRoutes = require("../routes/contactRoutes");
const requestRoutes = require("../routes/requestRoutes");

const app = express();

app.use(cors({ origin: ["https://escort-xrus.vercel.app"], credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/profiles", profileRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/requests", requestRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ detail: "Internal server error" });
});

module.exports = app;
