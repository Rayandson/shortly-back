import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import urlsRoutes from "./routes/urlsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(urlsRoutes);
app.use(usersRoutes)

const port = process.env.PORT
app.listen(port, () => console.log(`Server running in port ${port}`))