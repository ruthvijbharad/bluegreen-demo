const express = require("express");
const app = express();

// Get version from environment variable
const version = process.env.APP_VERSION || "blue";

// Enable JSON parsing
app.use(express.json());

// Enable CORS (allow requests from any origin)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", version });
});

// Version endpoint
app.get("/version", (req, res) => {
  res.json({ version });
});

// Root endpoint (optional)
app.get("/", (req, res) => {
  res.send(`API running, version: ${version}`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}, version ${version}`);
});
