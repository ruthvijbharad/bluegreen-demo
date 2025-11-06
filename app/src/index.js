import express from "express";
const app = express();
app.use(express.json());

const VERSION = process.env.APP_VERSION || "v1";
let items = [];

app.get("/health", (_, res) => res.json({ status: "ok" }));
app.get("/version", (_, res) => res.json({ version: VERSION }));
app.get("/items", (_, res) => res.json(items));
app.post("/items", (req, res) => {
  const { title } = req.body || {};
  if (!title) return res.status(400).json({ error: "title required" });
  const item = { id: Date.now(), title };
  items.push(item);
  res.status(201).json(item);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}, version ${VERSION}`));
