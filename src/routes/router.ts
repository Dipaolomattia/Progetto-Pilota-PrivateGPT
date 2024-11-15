import express from "express";
import docRouter from "../routes/docRouter";
import cors from "cors";

const router = express.Router();

// Middleware o altre configurazioni (es. bodyParser, logger, ecc.)
router.use(express.json());
router.use(
  cors({
    origin: "http://localhost:3001", // Permetti solo il tuo frontend
  })
);
router.use("/documents",docRouter.router);
export default { router };
