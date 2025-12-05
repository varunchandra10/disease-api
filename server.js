import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load diseases JSON
const diseasesPath = path.join(__dirname, "data", "diseases.json");
let diseases = JSON.parse(fs.readFileSync(diseasesPath, "utf-8"));

// UI for this server for easy fetching and understanding the repsonse of API
app.use(express.static("public"));

// Route: GET /disease?name=...
app.get("/disease", (req, res) => {
  const name = req.query.name?.toLowerCase();

  if (!name) {
    return res.status(400).json({ error: "Please provide a disease name" });
  }

  if (diseases[name]) {
    return res.json(diseases[name]);
  }

  return res.status(404).json({ error: "Disease not found" });
});

app.listen(port, () => {
  console.log(`Disease API running at http://localhost:${port}`);
});
