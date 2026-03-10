require("dotenv").config();

const healthRoutes = require("./routes/healthRoutes");
const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes"); // <-- important path

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
    res.send("Server running!");
});

// Connect API routes with prefix /api
app.use("/api", testRoutes);

app.use("/api/health", healthRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});