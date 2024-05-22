import exprees from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = exprees.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;