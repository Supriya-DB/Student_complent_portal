require("dotenv").config();
const complaintRoutes = require("./routes/complaintRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = 5000;
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});