import express from 'express';
import { UserActivity } from '../models/UserActivity';

const router = express.Router();

// Record new user access
router.post('/', async (req, res) => {
  try {
    const { userId, username } = req.body;
    
    // Check if user already exists
    const existingUser = await UserActivity.findOne({ userId });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }
    
    // Create new user activity record
    const userActivity = new UserActivity({
      userId,
      username,
      firstAccess: new Date()
    });
    
    await userActivity.save();
    res.status(201).json(userActivity);
  } catch (error) {
    res.status(500).json({ message: 'Error recording user activity', error });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await UserActivity.find().sort({ firstAccess: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user activity', error });
  }
});

export default router; 