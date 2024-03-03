import express from 'express';
import { sendMessage, getMessage } from "../controllers/message.controller.js"
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.get("/:id", protectRoute, getMessage);
// need to check if user is authenticated
router.post("/send/:id", protectRoute, sendMessage);

export default router;