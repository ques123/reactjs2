import mongoose from 'mongoose';

const userActivitySchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  firstAccess: {
    type: Date,
    required: true,
    default: Date.now
  }
});

export const UserActivity = mongoose.model('UserActivity', userActivitySchema); 