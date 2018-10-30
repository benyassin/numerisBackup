import express from 'express';
import userRoutes from './user';
import authRoutes from './auth';
import strateRoutes from './strate';

const router = express.Router();

router.get('/api-status', (req, res) => res.json({ status: "ok" }));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/strate', strateRoutes)


export default router