import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import cookieParser from "cookie-parser";    
import cors from 'cors';
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
dotenv.config();

// CORS setup
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",  
    credentials: true
}));

app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.send("Hello from backend");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// Server
app.listen(8800, () => {
    console.log("SERVER IS RUNNING ON PORT 8800");
});