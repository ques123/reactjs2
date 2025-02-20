interface UserActivity {
  username: string;
  firstAccess: string;
  userId: number;
}

const API_URL = 'http://localhost:3001/api';

export const userActivityService = {
  async recordUserAccess(userId: number, username: string) {
    try {
      const response = await fetch(`${API_URL}/user-activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, username }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to record user activity');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error recording user activity:', error);
    }
  },
  
  async getAllUsers(): Promise<UserActivity[]> {
    try {
      const response = await fetch(`${API_URL}/user-activity`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch user activity');
      }
      
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching user activity:', error);
      return [];
    }
  }
}; 