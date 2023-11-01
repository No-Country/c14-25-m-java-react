import express from "express";
import indexRoutes from "./routes/index.router.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("/api", indexRoutes)