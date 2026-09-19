import express from "express";
import authRouter from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map