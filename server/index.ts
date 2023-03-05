import 'dotenv/config';
import express from "express";
import cors from "cors";

import booksRoutes from "./routes/books";

const API_PORT = 5050;
const app = express();
app.use(cors());
app.use(express.json());
// Setup API
app.get("/", (req, res) => { res.json({success: true}) });
app.use("/books", booksRoutes);
// Start server
app.listen(API_PORT, () => console.log("Server started at http://localhost:" + API_PORT));
// Dev tools
import dev from "./dev";
/* dev.createRandomBooks(5); */