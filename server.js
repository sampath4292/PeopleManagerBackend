const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./core/db");
const personRoutes = require("./core/personRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use("/api", personRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
