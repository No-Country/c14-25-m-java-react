import express from 'express';
const router = express.Router();

import savingsGoalsRoutes from './savings-goals.routes.js';

router.use('/savings-goals', savingsGoalsRoutes);


export default router;