import express from "express";
import {getDocs} from "../middlewares/getAllDocuments";
const router = express.Router();

router.get("/getAllDocuments",getDocs);

export default { router };
