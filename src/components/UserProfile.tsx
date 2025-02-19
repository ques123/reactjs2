import React from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-[#2C2C2E] rounded-lg mb-4">
      <img 
        src={avatarUrl} 
        alt={`${username}'s avatar`}
        className="w-12 h-12 rounded-full border-2 border-[#3478F6]"
      />
      <div className="flex flex-col">
        <span className="text-[#3478F6] text-lg font-medium">{username}</span>
        <span className="text-[#8E8E93] text-sm">Connected User</span>
      </div>
    </div>
  );
}; 