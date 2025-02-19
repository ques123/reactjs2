import React from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="absolute top-4 right-4 flex flex-col items-center">
      <img 
        src={avatarUrl} 
        alt={`${username}'s avatar`}
        className="w-10 h-10 rounded-full"
      />
      <span className="mt-1 text-sm font-medium">{username}</span>
    </div>
  );
}; 