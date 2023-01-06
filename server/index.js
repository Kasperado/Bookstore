require('dotenv').config();
const express = require("express");
const cors = require("cors");

const API_PORT = 5050;
const app = express();
app.use(cors());
app.use(express.json());
// Setup API
app.get("/", (req, res) => { res.json({success: true}) });
app.use("/books", require("./routes/books"));
// Start server
app.listen(API_PORT, () => console.log("Server started at http://localhost:" + API_PORT));