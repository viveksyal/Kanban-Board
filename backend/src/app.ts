import express from "express";
import authRouter from "./routes/auth.routes.js"

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    })
});

export default app;